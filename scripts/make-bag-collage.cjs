// Builds a "bunch of our bags" collage (transparent background) from bag cut-outs.
// Usage: node scripts/make-bag-collage.cjs . public/factory/bags-collage.webp
const path = require('path');
const root = process.argv[2];
const out = process.argv[3];
const sharp = require(path.join(root, 'node_modules/sharp'));

const W = 1800, H = 1012;

// [file, centre x, bottom y, height] — drawn in order, back row first
const BAGS = [
  ['LH6.png', 560, 700, 470],      // Kajri
  ['D-cut5.png', 900, 690, 470],   // Shail
  ['LH7.png', 1240, 700, 470],     // Saheb
  ['Box4.png', 330, 945, 430],     // The Bread Basket
  ['D-cut6.png', 700, 950, 480],   // Fusion
  ['Box5.png', 1100, 945, 430],    // Bonzelo
  ['boppbox1.png', 1470, 945, 440],// Madhu Textorium
];

const shadow = (w) => Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="60"><defs><radialGradient id="g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#071d4a" stop-opacity="0.38"/><stop offset="1" stop-color="#071d4a" stop-opacity="0"/></radialGradient></defs><ellipse cx="${w / 2}" cy="30" rx="${w / 2}" ry="30" fill="url(#g)"/></svg>`
);

(async () => {
  const layers = [];
  for (const [file, cx, baseBottom, h] of BAGS) {
    const bottom = baseBottom - 70;
    const buf = await sharp(path.join(root, 'public/bags', file)).trim().resize({ height: h }).png().toBuffer();
    const { width } = await sharp(buf).metadata();
    const left = Math.round(cx - width / 2);
    const top = Math.round(bottom - h);
    const sw = Math.round(width * 0.9);
    layers.push({ input: shadow(sw), left: Math.round(cx - sw / 2), top: bottom - 34 });
    layers.push({ input: buf, left, top });
  }
  // Clip anything that falls outside the canvas
  const safe = [];
  for (const l of layers) {
    const meta = await sharp(l.input).metadata();
    let { left, top } = l;
    let img = sharp(l.input);
    const cropL = Math.max(0, -left), cropT = Math.max(0, -top);
    const wv = Math.min(meta.width - cropL, W - Math.max(left, 0));
    const hv = Math.min(meta.height - cropT, H - Math.max(top, 0));
    if (wv <= 0 || hv <= 0) continue;
    if (cropL || cropT || wv < meta.width || hv < meta.height) {
      img = img.extract({ left: cropL, top: cropT, width: wv, height: hv });
    }
    safe.push({ input: await img.png().toBuffer(), left: Math.max(left, 0), top: Math.max(top, 0) });
  }
  // sharp resizes before it composites, so flatten the layers first, then resize
  const full = await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite(safe)
    .png()
    .toBuffer();
  const info = await sharp(full)
    .resize({ width: 1600 })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(out);
  console.log(info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
})();
