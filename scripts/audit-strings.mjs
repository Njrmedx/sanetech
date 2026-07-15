// scripts/audit-strings.mjs
//
// Anti-claim text audit para o site Sanetech.
// Run: pnpm audit:strings
//
// Regras atuais:
//   - "water mol" / "watermol" em arquivo source (.tsx, .ts, .mdx, .json etc.)
//     fora de pastas excluídas (/node_modules, /.next, /public).
//   - Exceção: pixels de fotos em /public/images/galeria/ NÃO são auditados.
//
// Exit code:
//   0 → zero matches (build OK)
//   1 → 1+ matches (build deve falhar)

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");

const EXCLUDED_DIRS = new Set([
  "node_modules",
  ".next",
  "public",
  ".git",
  "dist",
  "out",
  ".turbo",
]);

const SCANNED_EXTENSIONS = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".md", ".mdx",
  ".json",
  ".css", ".html",
]);

const FORBIDDEN_PATTERNS = [
  {
    id: "AC-01",
    description: "Watermol brand name (exception applies to /public/images/galeria/ pixels only)",
    regex: /\bwater\s?mol\b/gi,
  },
];

function isExempt(absPath) {
  const rel = path.relative(PROJECT_ROOT, absPath).replace(/\\/g, "/");
  if (rel.endsWith("scripts/audit-strings.mjs")) return true;
  // Rule/research docs documenting AC-01 (negative references — never user-facing).
  if (rel.startsWith("docs/")) return true;
  if (rel.endsWith("CLAUDE.md")) return true;
  if (rel.endsWith("PRD.md")) return true;
  if (rel.endsWith("PRODUCT.md")) return true;
  if (rel.endsWith("MEMORY.md")) return true;
  if (rel.endsWith("galeria_watermol_exception.md")) return true;
  if (rel === "components/shadcnblocks/gallery-26.tsx") return true;
  return false;
}

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      const sub = await walk(path.join(dir, entry.name));
      out.push(...sub);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (SCANNED_EXTENSIONS.has(ext)) {
        out.push(path.join(dir, entry.name));
      }
    }
  }
  return out;
}

async function main() {
  const files = await walk(PROJECT_ROOT);
  const violations = [];

  for (const file of files) {
    if (isExempt(file)) continue;
    const text = await readFile(file, "utf8");
    for (const pattern of FORBIDDEN_PATTERNS) {
      const matches = [...text.matchAll(pattern.regex)];
      if (matches.length > 0) {
        for (const m of matches) {
          const lineNum = text.substring(0, m.index).split("\n").length;
          violations.push({
            rule: pattern.id,
            file: path.relative(PROJECT_ROOT, file),
            line: lineNum,
            match: m[0],
          });
        }
      }
    }
  }

  if (violations.length > 0) {
    console.error("\n[audit:strings] ❌ VIOLATIONS:\n");
    for (const v of violations) {
      console.error(`  ${v.rule} → ${v.file}:${v.line} "${v.match}"`);
    }
    console.error(`\n  Total: ${violations.length}\n`);
    process.exit(1);
  }

  console.log(`[audit:strings] ✅ ${files.length} files scanned, zero violations.`);
  process.exit(0);
}

if (import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
