/**
 * Cases index — maps slug to CaseContent.
 *
 * Used by:
 *   - app/(site)/cases/page.tsx (índice) → getAllCases() para grid
 *   - app/(site)/cases/[slug]/page.tsx (detalhe) → getCaseContent(slug)
 *     + generateStaticParams() consume CASE_SLUGS para prerender
 *
 * Defensive: getCaseContent returns null para slugs não cadastrados
 * (drives notFound() em [slug]/page.tsx).
 *
 * Phase B7-D (2026-05-13): 3 cases AI-draft anônimos.
 */

import type { CaseContent } from "./_types";
import etdiIndustrialQuimica from "./etdi-industrial-quimica";
import eteCondominial from "./ete-condominial";
import tipo1LaboratorioClinico from "./tipo-1-laboratorio-clinico";

const CASES: Record<string, CaseContent> = {
  "etdi-industrial-quimica": etdiIndustrialQuimica,
  "ete-condominial": eteCondominial,
  "tipo-1-laboratorio-clinico": tipo1LaboratorioClinico,
};

export const CASE_SLUGS = [
  "etdi-industrial-quimica",
  "ete-condominial",
  "tipo-1-laboratorio-clinico",
] as const;

export function getCaseContent(slug: string): CaseContent | null {
  return CASES[slug] ?? null;
}

export function getAllCases(): Array<{ slug: string; content: CaseContent }> {
  return CASE_SLUGS.map((slug) => ({ slug, content: CASES[slug]! }));
}

export type { CaseContent } from "./_types";
