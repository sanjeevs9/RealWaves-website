// Before/after evidence screenshots. Before = live site, after = new build on :3123.
// Uses the puppeteer-core and Lighthouse that `npx lighthouse@12.8.2` installs.
// Usage: node seo/tools/screenshots.mjs <npx-cache-dir>/node_modules
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const MODULES = process.argv[2];
const require = createRequire(import.meta.url);
const puppeteer = require(path.join(MODULES, "puppeteer-core"));
const { ReportGenerator } = await import(path.join(MODULES, "lighthouse/report/generator/report-generator.js"));

const OUT = path.resolve("seo/evidence");
const SRC = path.join(OUT, "src");
const BEFORE = "https://www.realwavespacks.com";
const AFTER = "http://localhost:3123";
const desktop = { width: 1440, height: 900, deviceScaleFactor: 1 };
const phone = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true };

// Lighthouse summaries as HTML pages, so their score gauges can be screenshotted
for (const name of ["before-home-mobile", "after-home-mobile"]) {
  const json = JSON.parse(fs.readFileSync(`seo/data/lighthouse/${name}.json`, "utf8"));
  fs.writeFileSync(path.join(SRC, `lh-${name}.html`), ReportGenerator.generateReportHtml(json));
}

const shots = [
  { name: "before-home-desktop", url: `${BEFORE}/`, vp: desktop },
  { name: "after-home-desktop", url: `${AFTER}/`, vp: desktop },
  { name: "before-home-mobile", url: `${BEFORE}/`, vp: phone },
  { name: "after-home-mobile", url: `${AFTER}/`, vp: phone },
  { name: "before-products-nojs", url: `${BEFORE}/products`, vp: { ...desktop, height: 1250 }, nojs: true },
  { name: "after-products-nojs", url: `${AFTER}/products`, vp: { ...desktop, height: 1250 }, nojs: true },
  { name: "before-blogpost-nojs", url: `${BEFORE}/blogs/1`, vp: desktop, nojs: true },
  { name: "after-blogpost-nojs", url: `${AFTER}/blogs/custom-carry-bags-promote-your-business`, vp: desktop, nojs: true },
  { name: "before-products", url: `${BEFORE}/products`, vp: desktop },
  { name: "after-products", url: `${AFTER}/products`, vp: desktop },
  { name: "before-product", url: `${BEFORE}/products/laxmi-d-cut`, vp: desktop },
  { name: "after-product", url: `${AFTER}/products/laxmi-d-cut`, vp: desktop },
  { name: "before-empty-category", url: `${BEFORE}/products?category=bopploophandle`, vp: desktop },
  { name: "before-soft-404", url: `${BEFORE}/products/this-page-does-not-exist`, vp: { ...desktop, height: 640 } },
  { name: "after-real-404", url: `${AFTER}/products/this-page-does-not-exist`, vp: { ...desktop, height: 640 } },
  { name: "before-menu", url: `${BEFORE}/about`, vp: { width: 1280, height: 800, deviceScaleFactor: 1 }, menu: true },
  { name: "after-menu", url: `${AFTER}/about`, vp: { width: 1280, height: 800, deviceScaleFactor: 1 }, menu: true },
  { name: "before-footer", url: `${BEFORE}/about`, vp: { width: 1280, height: 800, deviceScaleFactor: 1 }, element: "footer" },
  { name: "after-footer", url: `${AFTER}/about`, vp: { width: 1280, height: 800, deviceScaleFactor: 1 }, element: "footer" },
  { name: "before-store", url: `${BEFORE}/`, vp: desktop, heading: "Our Store Awaits" },
  { name: "after-store", url: `${AFTER}/`, vp: desktop, heading: "Our Store Awaits" },
  { name: "after-dcut-page", url: `${AFTER}/non-woven-bags/d-cut-bags`, vp: { ...desktop, height: 2520 }, clip: { x: 0, y: 0, width: 1440, height: 2520 } },
  { name: "after-box-page-top", url: `${AFTER}/non-woven-bags/box-bags`, vp: desktop },
  { name: "after-dcut-page-top", url: `${AFTER}/non-woven-bags/d-cut-bags`, vp: desktop },
  { name: "after-ucut-page-top", url: `${AFTER}/non-woven-bags/u-cut-bags`, vp: desktop },
  { name: "after-loop-page-top", url: `${AFTER}/non-woven-bags/loop-handle-bags`, vp: desktop },
  { name: "after-bopp-page-top", url: `${AFTER}/non-woven-bags/bopp-laminated-bags`, vp: desktop },
  { name: "after-dcut-mobile", url: `${AFTER}/non-woven-bags/d-cut-bags`, vp: phone },
  { name: "after-dcut-faq", url: `${AFTER}/non-woven-bags/d-cut-bags`, vp: desktop, heading: "frequently asked questions" },
  { name: "before-robots", url: `${BEFORE}/robots.txt`, vp: { width: 900, height: 230, deviceScaleFactor: 1 } },
  { name: "after-robots", url: `${AFTER}/robots.txt`, vp: { width: 900, height: 230, deviceScaleFactor: 1 } },
  { name: "before-sitemap", url: `${BEFORE}/sitemap.xml`, vp: { width: 1100, height: 640, deviceScaleFactor: 1 } },
  { name: "after-sitemap", url: `${AFTER}/sitemap.xml`, vp: { width: 1100, height: 640, deviceScaleFactor: 1 } },
  { name: "after-llms", url: `${AFTER}/llms.txt`, vp: { width: 1300, height: 820, deviceScaleFactor: 1 } },
  ...["head-before", "head-after", "schema-before", "schema-after"].map((n) => ({
    name: `evidence-${n}`, url: `file://${path.join(SRC, n + ".html")}`, vp: { width: 1400, height: 400, deviceScaleFactor: 1 }, fullPage: true,
  })),
  ...["before-home-mobile", "after-home-mobile"].map((n) => ({
    name: `lighthouse-${n}`, url: `file://${path.join(SRC, "lh-" + n + ".html")}`, vp: { width: 1000, height: 560, deviceScaleFactor: 2 }, wait: 5000, clip: { x: 200, y: 30, width: 600, height: 115 },
  })),
];

const only = process.argv[3] ? new Set(process.argv[3].split(",")) : null;
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

for (const s of shots) {
  if (only && !only.has(s.name)) continue;
  const page = await browser.newPage();
  try {
    await page.setViewport(s.vp);
    await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
    if (s.nojs) await page.setJavaScriptEnabled(false);
    await page.goto(s.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await new Promise((r) => setTimeout(r, s.wait ?? 3500)); // let fonts, images and entry animations settle
    const file = path.join(OUT, `${s.name}.jpg`);
    if (s.menu) {
      const btn = await page.evaluateHandle(() => [...document.querySelectorAll("nav button")].find((b) => b.textContent.trim().startsWith("Products")));
      await btn.hover();
      await new Promise((r) => setTimeout(r, 900));
      await page.screenshot({ path: file, type: "jpeg", quality: 78, clip: { x: 0, y: 0, width: s.vp.width, height: 440 } });
    } else if (s.element || s.heading) {
      const el = s.element
        ? await page.$(s.element)
        : await page.evaluateHandle((t) => [...document.querySelectorAll("h2")].find((h) => h.textContent.includes(t))?.closest("section"), s.heading);
      await el.scrollIntoView();
      await new Promise((r) => setTimeout(r, 1500));
      await el.screenshot({ path: file, type: "jpeg", quality: 78 });
    } else if (s.clip) {
      await page.screenshot({ path: file, type: "jpeg", quality: 85, clip: s.clip });
    } else {
      await page.screenshot({ path: file, type: "jpeg", quality: 78, fullPage: !!s.fullPage });
    }
    console.log("ok  ", s.name);
  } catch (e) {
    console.log("FAIL", s.name, e.message.split("\n")[0]);
  }
  await page.close();
}
await browser.close();
