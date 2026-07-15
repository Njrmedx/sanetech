/**
 * remove-logo-bg.mjs — torna pixels brancos (>235 RGB) transparentes nas
 * logos. Sharp ja instalado como dep. Output: *-transparent.png em public/.
 */
import sharp from "sharp";
import { resolve } from "path";

const SOURCES = [
  { input: "public/logo-principal.png", output: "public/logo-principal-transparent.png" },
  { input: "public/logo-secundaria.png", output: "public/logo-secundaria-transparent.png" },
];

const THRESHOLD = 235;

async function removeWhiteBg(srcPath, outPath) {
  const { data, info } = await sharp(resolve(srcPath))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const newData = Buffer.from(data);

  for (let i = 0; i < newData.length; i += channels) {
    const r = newData[i];
    const g = newData[i + 1];
    const b = newData[i + 2];
    if (r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) {
      newData[i + 3] = 0;
    }
  }

  await sharp(newData, {
    raw: { width: info.width, height: info.height, channels },
  })
    .png()
    .toFile(resolve(outPath));

  console.log(`OK ${outPath} (${info.width}x${info.height})`);
}

for (const { input, output } of SOURCES) {
  await removeWhiteBg(input, output);
}
