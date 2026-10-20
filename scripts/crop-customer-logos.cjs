// Crops each customer's logo panel out of a bag photo we printed.
// Usage: node scripts/crop-customer-logos.cjs . public/customers [preview]
const path = require('path');
const root = process.argv[2];
const outDir = process.argv[3];
const preview = process.argv[4] === 'preview';
const sharp = require(path.join(root, 'node_modules/sharp'));

// Crop boxes are fractions of the source image: [left, top, right, bottom]
const LOGOS = [
  { slug: 'naivedya', src: 'public/naivedya.png', box: null },
  { slug: 'shringaar', src: 'public/bags/LH4.png', box: [0.08, 0.50, 0.92, 0.87] },
  { slug: 'bread-basket', src: 'public/bags/Box4.png', box: [0.33, 0.53, 0.56, 0.80] },
  { slug: 'fusion', src: 'public/bags/D-cut6.png', box: [0.12, 0.29, 0.88, 0.66] },
  { slug: 'bajaj-shoes', src: 'public/bags/boppbox.png', box: [0.05, 0.40, 0.97, 0.94] },
  { slug: 'madhu-textorium', src: 'public/bags/boppbox1.png', box: [0.06, 0.42, 0.94, 0.76] },
  { slug: 'kajri', src: 'public/bags/LH6.png', box: [0.14, 0.38, 0.78, 0.64] },
  { slug: 'saheb', src: 'public/bags/LH7.png', box: [0.08, 0.50, 0.92, 0.74] },
  { slug: 'bonzelo', src: 'public/bags/Box5.png', box: [0.11, 0.46, 0.89, 0.88] },
  { slug: 'vardaati', src: 'public/bags/LH5.png', box: [0.22, 0.40, 0.78, 0.64] },
  { slug: 'shree-shyam', src: 'public/bags/D-cut7.png', box: [0.05, 0.27, 0.95, 0.62] },
  { slug: 'puncher', src: 'public/bags/boppbox2.png', box: [0.05, 0.74, 0.95, 0.93] },
  { slug: 'shail', src: 'public/bags/D-cut5.png', box: [0.08, 0.35, 0.92, 0.62] },
];

(async () => {
  const tiles = [];
  for (const l of LOGOS) {
    const file = path.join(root, l.src);
    let img = sharp(file);
    if (l.box) {
      const m = await sharp(file).metadata();
      const [x0, y0, x1, y1] = l.box;
      img = img.extract({ left: Math.round(x0 * m.width), top: Math.round(y0 * m.height), width: Math.round((x1 - x0) * m.width), height: Math.round((y1 - y0) * m.height) });
    } else {
      img = img.trim();
    }
    const buf = await img.resize({ width: 640, height: 240, fit: 'inside', withoutEnlargement: true }).toBuffer();
    const meta = await sharp(buf).metadata();
    if (preview) {
      tiles.push(await sharp(buf).resize(300, 190, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).extend({ top: 5, bottom: 5, left: 5, right: 5, background: '#999999' }).png().toBuffer());
    } else {
      await sharp(buf).webp({ quality: 82, alphaQuality: 90 }).toFile(path.join(outDir, `${l.slug}.webp`));
    }
    console.log(l.slug, `${meta.width}x${meta.height}`);
  }
  if (preview) {
    await sharp({ create: { width: 310 * 4, height: 200 * 4, channels: 3, background: '#fff' } })
      .composite(tiles.map((b, i) => ({ input: b, left: (i % 4) * 310, top: Math.floor(i / 4) * 200 })))
      .png().toFile(path.join(outDir, 'logo-preview.png'));
  }
})();
