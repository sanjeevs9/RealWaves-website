"""Builds evidence pages that show what search engines read in each page's HTML:
the <head> tags (title, canonical, description) and the structured data.
Before = live site, after = new build on :3123. Screenshot them with headless Chrome.

Usage: python3 -I seo/tools/evidence_pages.py <out_dir>
"""
import html
import json
import re
import sys
import urllib.request

OUT = sys.argv[1]
SITES = {
    "before": ("https://www.realwavespacks.com", "Live site, 9 Oct 2026"),
    "after": ("http://localhost:3123", "New build"),
}
PAGES = {
    "before": ["/", "/about", "/products", "/products/laxmi-d-cut", "/blogs/1"],
    "after": ["/", "/about", "/products", "/products/laxmi-d-cut",
              "/blogs/custom-carry-bags-promote-your-business", "/non-woven-bags/d-cut-bags"],
}

CSS = """
body{font:15px/1.45 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:24px;background:#fff;color:#14213d}
h1{font-size:18px;margin:0 0 4px} p.sub{margin:0 0 16px;color:#5b6475;font-size:13px}
table{border-collapse:collapse;width:100%;font-size:13px} th,td{border:1px solid #dde3ee;padding:7px 9px;text-align:left;vertical-align:top}
th{background:#f1f5f9;font-weight:600} code{font:12px/1.4 ui-monospace,Menlo,monospace;word-break:break-all}
.bad{background:#fdecea;color:#a61b1b;font-weight:600}.good{background:#e8f5ec;color:#17643a;font-weight:600}
"""


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 RealWavesSEOAudit"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def tag(h, pattern):
    m = re.search(pattern, h, re.S)
    return html.unescape(m.group(1)).strip() if m else ""


def schema(h):
    found = []
    for block in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
        data = json.loads(html.unescape(block))
        for n in data.get("@graph", [data]):
            found.append(n)
    return found


def cell(value, ok):
    return f'<td class="{"good" if ok else "bad"}"><code>{html.escape(value or "(missing)")}</code></td>'


def head_page(key):
    base, label = SITES[key]
    rows = []
    for path in PAGES[key]:
        h = fetch(base + path)
        title = tag(h, r"<title>(.*?)</title>")
        canon = tag(h, r'<link rel="canonical" href="([^"]+)"')
        desc = tag(h, r'<meta name="description" content="([^"]*)"')
        expected = "https://www.realwavespacks.com" + ("" if path == "/" else path)
        canon_ok = canon.rstrip("/") == expected.rstrip("/")
        rows.append(f"<tr><td><code>{path}</code></td>{cell(title, 'Raipur' in title)}{cell(canon, canon_ok)}"
                    f"<td><code>{html.escape(desc[:120])}{'…' if len(desc) > 120 else ''}</code></td></tr>")
    return (f"<style>{CSS}</style><h1>What Google reads in each page's &lt;head&gt; ({key})</h1>"
            f"<p class=sub>{label} · {base} · raw HTML, no JavaScript</p>"
            "<table><tr><th>Page</th><th>Title</th><th>Canonical (the address Google is told to use)</th><th>Description</th></tr>"
            + "".join(rows) + "</table>")


def schema_page(key):
    base, label = SITES[key]
    rows = []
    for path in PAGES[key]:
        nodes = schema(fetch(base + path))
        summary = []
        for n in nodes:
            t = n.get("@type")
            if t in ("Organization", "LocalBusiness"):
                addr = n.get("address", {})
                bits = [f"name: {n.get('name')}", f"street: {addr.get('streetAddress', '(none)')}",
                        f"PIN: {addr.get('postalCode', '(none)')}", f"geo: {'yes' if n.get('geo') else 'no'}",
                        f"url: {n.get('url')}"]
                summary.append(f"<b>{t}</b> – " + "; ".join(bits))
            elif t == "BreadcrumbList":
                summary.append("<b>BreadcrumbList</b> – " + " › ".join(i["name"][:30] for i in n["itemListElement"]))
            elif t == "FAQPage":
                summary.append(f"<b>FAQPage</b> – {len(n['mainEntity'])} questions")
            elif t == "WebSite":
                summary.append(f"<b>WebSite</b> – {n.get('url')}")
            else:
                summary.append(f"<b>{t}</b>")
        rows.append(f"<tr><td><code>{path}</code></td><td>{'<br>'.join(summary) or '(none)'}</td></tr>")
    return (f"<style>{CSS}</style><h1>Structured data on each page ({key})</h1>"
            f"<p class=sub>{label} · {base} · schema.org JSON-LD found in the HTML</p>"
            "<table><tr><th>Page</th><th>Structured data Google can read</th></tr>" + "".join(rows) + "</table>")


for key in SITES:
    open(f"{OUT}/head-{key}.html", "w").write(head_page(key))
    open(f"{OUT}/schema-{key}.html", "w").write(schema_page(key))
    print("wrote", key)
