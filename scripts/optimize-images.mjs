// Makes web-sized WebP copies of the site's photos, next to the originals.
// The site serves images as-is (next.config.js: images.unoptimized), because Vercel's
// image optimisation returns 402 once the Hobby plan's monthly quota is used up.
// Run after adding a photo:  node scripts/optimize-images.mjs
// then point the import / path at the new .webp file.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

// [file under public/, longest side in px, optional WebP quality]
const IMAGES = [
  // product cut-outs (transparent background), shown up to ~600px wide
  ...[
    "D-cut4", "D-cut5", "D-cut6", "D-cut7", "u-cut1", "u-cut2", "LH4", "LH5", "LH6", "LH7",
    "Box3", "Box4", "Box5", "boppbox", "boppbox1", "boppbox2", "designed", "redBag",
  ].map((n) => [`bags/${n}.png`, 1000]),
  ["heroSection/hero-bag.png", 900],
  // "Why choose us" cards; two of them are also full-width blog headers
  ["WhyChooseus/ecological-bag-grass.jpg", 1600, 62], // grass texture compresses poorly
  ["WhyChooseus/woman-holding-gift-bag-desk.jpg", 1800],
  ["WhyChooseus/light-bulb-with-drawing-graph.jpg", 1200],
  ["WhyChooseus/location-symbol-with-landscape-background.jpg", 1200],
  ["WhyChooseus/laptop-delivery-truck-with-box.jpg", 1200],
  ["WhyChooseus/close-up-environment-sign-collection.jpg", 1200],
  // blog header
  ["a310f323ee3331152834763071548ae7378fa3c5.jpg", 1800],
];

const root = path.resolve("public");
for (const [rel, max, quality] of IMAGES) {
  const src = path.join(root, rel);
  if (!fs.existsSync(src)) {
    console.log("skip (missing)", rel);
    continue;
  }
  const out = src.replace(/\.(png|jpe?g)$/i, ".webp");
  const info = await sharp(src)
    .rotate()
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .webp({ quality: quality ?? (rel.endsWith(".png") ? 82 : 76), alphaQuality: 90, effort: 6 })
    .toFile(out);
  const before = fs.statSync(src).size / 1024;
  console.log(`${rel.padEnd(58)} ${Math.round(before).toString().padStart(6)} KB -> ${Math.round(info.size / 1024).toString().padStart(4)} KB  ${info.width}x${info.height}`);
}
