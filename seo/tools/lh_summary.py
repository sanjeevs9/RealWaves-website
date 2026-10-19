"""Summarise Lighthouse JSON files in seo/data/lighthouse into a table."""
import glob, json, os
rows = []
for f in sorted(glob.glob("seo/data/lighthouse/*.json")):
    try:
        d = json.load(open(f))
    except ValueError:
        continue
    if "categories" not in d:
        continue
    c, a = d["categories"], d["audits"]
    name = os.path.basename(f)[:-5]
    sc = lambda k: round((c[k]["score"] or 0) * 100)
    failed_seo = [r["id"] for r in c["seo"]["auditRefs"] if r["weight"] and a[r["id"]]["score"] == 0]
    rows.append((name, sc("performance"), sc("seo"), sc("accessibility"), sc("best-practices"),
                 a["largest-contentful-paint"]["displayValue"], a["cumulative-layout-shift"]["displayValue"],
                 a["total-blocking-time"]["displayValue"], round(a["total-byte-weight"]["numericValue"] / 1024),
                 ",".join(failed_seo)))
print(f"{'run':28} perf seo a11y bp  LCP      CLS    TBT     KB    failed SEO audits")
for r in rows:
    print(f"{r[0]:28} {r[1]:4} {r[2]:3} {r[3]:4} {r[4]:3}  {r[5]:8} {r[6]:6} {r[7]:7} {r[8]:5} {r[9]}")
