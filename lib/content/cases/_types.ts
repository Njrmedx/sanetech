/**
 * CaseContent — shape for per-case detail page content.
 *
 * Each case (industrial / sanitário / laboratorial) has a corresponding
 * <slug>.ts file exporting a default object matching this interface.
 * Consumed by app/(site)/cases/[slug]/page.tsx dynamic route + cards
 * in app/(site)/cases/page.tsx índice.
 *
 * AC-05 critical: NUNCA nominar cliente. Segmento + porte + localização
 * vaga apenas. AC-06 critical: Resultados sem dados autorizados usa
 * fallback PRD §8.12.2 verbatim.
 *
 * Phase B7-D (2026-05-13): 3 cases AI-draft anônimos.
 */

export interface CaseContent {
  /** Segmento industrial vago — sem nominar cliente (AC-05). */
  segmento: string;
  /** Porte aproximado — sem nominar cliente (AC-05). */
  porte: string;
  /** Localização vaga (cidade/região) — sem nominar cliente (AC-05). */
  localizacao: string;
  /** Título técnico do case. */
  titulo: string;
  /** Resumo 1-line para card no índice (PRD §8.12.1 "1 frase de resultado neutro"). */
  resumo: string;
  /** Bloco 2 — Desafio (1-2 parágrafos). */
  desafio: string[];
  /** Bloco 3 — Diagnóstico (1-2 parágrafos). */
  diagnostico: string[];
  /** Bloco 4 — Solução proposta (intro + bullets de escopo técnico). */
  solucao: { intro: string; bullets: string[] };
  /** Bloco 5 — Resultados. Sem dados autorizados, usar fallback PRD §8.12.2 verbatim. */
  resultados: string[];
  /** Bloco 6 — Aprendizados / replicabilidade (1-2 parágrafos). */
  aprendizados: string[];
  /** SEO metadata. */
  seo: { title: string; description: string };
}
