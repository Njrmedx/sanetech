// scripts/build-galeria-assets.mjs
//
// One-off offline asset pipeline para a página /galeria.
// Lê fotos raw em E:/Sanetech/Material/, otimiza via sharp, emite webps
// em sanetech-web/public/images/galeria/<section>/<slug>.webp.
//
// Uso: pnpm node scripts/build-galeria-assets.mjs

import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const MATERIAL_ROOT = path.resolve(PROJECT_ROOT, "..", "Material");
const OUT_ROOT = path.resolve(PROJECT_ROOT, "public", "images", "galeria");

const MAX_DIMENSION = 2400;
const WEBP_QUALITY = 82;

const SECTIONS = [
  {
    id: "01-agua-reagente",
    sourceDir: "ÁGUA REAGENTE PRODUÇÃO, MANUTENÇÃO E OPERAÇÃO",
    picks: [
      { source: "MANUTENÇÃO ÁGUA REAGENTE 01.jpg", slug: "manutencao-01" },
      { source: "MANUTENÇÃO ÁGUA REAGENTE 04.jpg", slug: "manutencao-04" },
      { source: "MANUTENÇÃO ÁGUA REAGENTE 05.jpg", slug: "manutencao-05" },
      { source: "MANUTENÇÃO ÁGUA REAGENTE 08.jpg", slug: "manutencao-08" },
      { source: "MANUTENÇÃO ÁGUA REAGENTE 10.jpg", slug: "manutencao-10" },
      { source: "MANUTENÇÃO ÁGUA REAGENTE 11.jpg", slug: "manutencao-11" },
      { source: "REUSO ÁGUA REAGENTE 01.jpg", slug: "reuso-01" },
      { source: "REUSO ÁGUA REAGENTE 02.jpg", slug: "reuso-02" },
      { source: "REUSO ÁGUA REAGENTE 03.jpg", slug: "reuso-03" },
      { source: "REUSO ÁGUA REAGENTE 04.jpg", slug: "reuso-04" },
    ],
  },
  {
    id: "02-tratabilidade",
    sourceDir: "ESTUDO DE TRATABILIDADE DE EFLUENTES",
    picks: [
      { source: "TRATABILIDADE ROTAEVAPORADOR.jpeg", slug: "tratabilidade-rotaevaporador-tecnico" },
      { source: "ESTUDO TRATABILIDADE.JPG", slug: "estudo-tratabilidade-bancada" },
      { source: "Cone 1_ Sd 60 do tanque de aeração Cone 2_ efluente Tratado.jpg", slug: "cones-imhoff-sedimentacao" },
      { source: "ROTAEVAPORADOR 2.png", slug: "rotaevaporador-ensaio" },
      { source: "TRAT 2 ROTAEVAPORADOR.png", slug: "rotaevaporador-unidade" },
      { source: "UNIDADE FRACIONAMENTO TERMICO A VACUO TRATABILIDADE.png", slug: "uftv-fracionamento-termico" },
    ],
  },
  {
    id: "03-etdi",
    sourceDir: "OPERAÇAO DE ETDI",
    picks: [
      { source: "água tratada 2 e clorador.jpg", slug: "agua-tratada-vertedouro" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 2.jpg", slug: "etdi-inspecao-tanque-02" },
      { source: "TERCEIRIZAÇÃO OEPRAÇÃO.jpg", slug: "etdi-amostra-aeracao" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 3.jpg", slug: "etdi-monitoramento-03" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 6.jpg", slug: "etdi-coleta-skyline" },
      { source: "sopradores.jpg", slug: "sopradores-sala" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 11.jpg", slug: "etdi-poco-visita-11" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 14.jpg", slug: "etdi-painel-eletrico-multimetro" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 15.jpg", slug: "etdi-sopradores-manutencao" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 20.jpg", slug: "etdi-adensador-lodo" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 23.jpg", slug: "etdi-filtros-pressurizados" },
      { source: "TERCEIRIZAÇÃO OPERAÇÃO 22.jpg", slug: "etdi-flanges-detalhe" },
    ],
  },
];

async function processOne(sourceAbs, outAbs) {
  const buf = await sharp(sourceAbs)
    .rotate()
    .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toBuffer();
  await writeFile(outAbs, buf);
  const meta = await sharp(outAbs).metadata();
  return { width: meta.width, height: meta.height, size: buf.length };
}

async function main() {
  if (!existsSync(MATERIAL_ROOT)) {
    console.error(`[ERR] Material/ not found at ${MATERIAL_ROOT}`);
    process.exit(1);
  }
  const manifest = [];
  for (const section of SECTIONS) {
    const sectionOut = path.join(OUT_ROOT, section.id);
    await mkdir(sectionOut, { recursive: true });
    const sectionSrc = path.join(MATERIAL_ROOT, section.sourceDir);
    for (const pick of section.picks) {
      const src = path.join(sectionSrc, pick.source);
      const out = path.join(sectionOut, `${pick.slug}.webp`);
      console.log(`[build] ${pick.source} → ${section.id}/${pick.slug}.webp`);
      const dims = await processOne(src, out);
      manifest.push({
        section: section.id,
        slug: pick.slug,
        src: `/images/galeria/${section.id}/${pick.slug}.webp`,
        ...dims,
      });
    }
  }
  await writeFile(path.join(OUT_ROOT, "_manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  console.log(`[ok] ${manifest.length} webps + _manifest.json emitted`);
}

const invokedDirectly =
  typeof process.argv[1] === "string" &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (invokedDirectly) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
