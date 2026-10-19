"""Small SEO crawler: what a search engine sees in the raw HTML (no JavaScript).

Usage:  python3 -I seo/tools/crawl.py https://www.realwavespacks.com seo/data/before-live.json
        python3 -I seo/tools/crawl.py http://localhost:3123 seo/data/after-local.json https://www.realwavespacks.com

Starts at the homepage, follows only real <a href> links (what Google can follow),
and also fetches every URL listed in the sitemap. The optional third argument is the
public origin to map sitemap/canonical URLs back onto the crawled host.
"""
import html as htmllib
import json
import re
import sys
import urllib.parse
import urllib.request
from collections import deque

BASE = sys.argv[1].rstrip("/")
OUT = sys.argv[2]
PUBLIC = (sys.argv[3] if len(sys.argv) > 3 else BASE).rstrip("/")
UA = "Mozilla/5.0 (compatible; RealWavesSEOAudit/1.0)"


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.read().decode("utf-8", "replace"), dict(r.headers)
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace"), dict(e.headers)


def text_of(fragment):
    fragment = re.sub(r"<(script|style|noscript|template)[^>]*>.*?</\1>", " ", fragment, flags=re.S | re.I)
    fragment = re.sub(r"<[^>]+>", " ", fragment)
    return re.sub(r"\s+", " ", htmllib.unescape(fragment)).strip()


def meta(h, attr, name):
    m = re.search(rf'<meta[^>]+{attr}="{re.escape(name)}"[^>]+content="([^"]*)"', h)
    return htmllib.unescape(m.group(1)) if m else None


def schema_types(h):
    types = []
    for block in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
        try:
            data = json.loads(htmllib.unescape(block))
        except ValueError:
            types.append("INVALID_JSON")
            continue
        nodes = data.get("@graph", [data]) if isinstance(data, dict) else data
        for n in nodes:
            t = n.get("@type")
            types.extend(t if isinstance(t, list) else [t])
    return types


def analyse(path, status, h):
    body = re.search(r"<body[^>]*>(.*)</body>", h, re.S)
    body = body.group(1) if body else h
    # Next.js streams Suspense content into hidden divs; count only the visible document
    visible = re.sub(r'<div hidden id="S:\d+">.*?</div>', " ", body, flags=re.S)
    h1s = [text_of(x) for x in re.findall(r"<h1[^>]*>(.*?)</h1>", h, re.S)]
    links = re.findall(r'<a[^>]+href="([^"]+)"', h)
    internal = sorted({urllib.parse.urljoin(PUBLIC + path, l).split("#")[0] for l in links
                       if urllib.parse.urljoin(PUBLIC + path, l).startswith(PUBLIC)})
    imgs = re.findall(r"<img[^>]*>", h)
    canon = re.search(r'<link rel="canonical" href="([^"]+)"', h)
    title = re.search(r"<title>(.*?)</title>", h, re.S)
    return {
        "path": path,
        "status": status,
        "title": htmllib.unescape(title.group(1)) if title else None,
        "description": meta(h, "name", "description"),
        "canonical": canon.group(1) if canon else None,
        "robots": meta(h, "name", "robots"),
        "og_url": meta(h, "property", "og:url"),
        "og_image": meta(h, "property", "og:image"),
        "h1": h1s,
        "words": len(text_of(visible).split()),
        "internal_links": internal,
        "schema": schema_types(h),
        "images": len(imgs),
        "images_no_alt": sum(1 for i in imgs if not re.search(r'alt="[^"]+"', i)),
        "mentions_vercel_app": "vercel.app" in h,
    }


def main():
    robots_status, robots, _ = fetch(BASE + "/robots.txt")
    sm_status, sitemap, _ = fetch(BASE + "/sitemap.xml")
    sitemap_urls = re.findall(r"<loc>(.*?)</loc>", sitemap)

    pages, seen, queue = {}, set(), deque(["/"])
    linked_from_home = set()
    while queue:
        path = queue.popleft()
        if path in seen:
            continue
        seen.add(path)
        status, h, _ = fetch(BASE + path)
        page = analyse(path, status, h)
        pages[path] = page
        for u in page["internal_links"]:
            p = urllib.parse.urlparse(u)
            nxt = p.path + (("?" + p.query) if p.query else "")
            if p.path.startswith(("/api", "/_next")) or p.query:
                continue
            linked_from_home.add(p.path)
            if p.path not in seen:
                queue.append(p.path)

    for u in sitemap_urls:
        path = urllib.parse.urlparse(u).path or "/"
        if path not in pages:
            status, h, _ = fetch(BASE + path)
            pages[path] = analyse(path, status, h)

    sitemap_paths = {urllib.parse.urlparse(u).path or "/" for u in sitemap_urls}
    result = {
        "base": BASE,
        "robots_txt": robots,
        "sitemap_status": sm_status,
        "sitemap_urls": sitemap_urls,
        "sitemap_hosts": sorted({re.match(r"https?://[^/]+", u).group(0) for u in sitemap_urls}),
        "pages": pages,
        "reachable_by_links": sorted(linked_from_home | {"/"}),
        "in_sitemap_not_linked": sorted(sitemap_paths - linked_from_home - {"/"}),
    }
    with open(OUT, "w") as f:
        json.dump(result, f, indent=1)

    titles = [p["title"] for p in pages.values()]
    print(f"{len(pages)} pages crawled from {BASE}")
    print(f"sitemap: {len(sitemap_urls)} URLs on {result['sitemap_hosts']}")
    print(f"pages reachable by <a href> from home: {len(result['reachable_by_links'])}")
    print(f"in sitemap but no crawlable link: {len(result['in_sitemap_not_linked'])}")
    print(f"duplicate titles: {len(titles) - len(set(titles))}")
    for p in sorted(pages.values(), key=lambda x: x["path"]):
        print(f"  {p['path'][:38]:38} {p['status']} h1={len(p['h1'])} words={p['words']:4} links={len(p['internal_links']):2} "
              f"schema={','.join(t for t in p['schema'] if t) or '-'} canon={(p['canonical'] or '-').replace(PUBLIC, '')[:30]} | {p['title'][:60] if p['title'] else '-'}")


main()
