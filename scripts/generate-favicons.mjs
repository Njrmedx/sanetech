import sharp from "sharp";
import { resolve } from "path";

const SRC = resolve("public/icon-source.png");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(SRC)
    .trim()
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(resolve(`public/${name}`));
  console.log(`OK ${name}`);
}

// Maskable: 60% canvas + safe-area com fundo da brand
await sharp(SRC)
  .trim()
  .resize(307, 307, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  })
  .extend({
    top: 102, bottom: 103, left: 102, right: 103,
    background: { r: 36, g: 38, b: 93, alpha: 1 }, // primary-900
  })
  .png()
  .toFile(resolve("public/icon-maskable-512.png"));
console.log("OK icon-maskable-512.png");
