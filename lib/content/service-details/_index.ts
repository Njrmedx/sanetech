/**
 * Service details index — maps slug to ServiceDetailContent.
 *
 * Used by app/(site)/servicos/<slug>/page.tsx routes to resolve
 * detail content for the slug. getServiceDetail returns null if
 * slug nao tem detail content cadastrado (defensive contra
 * mismatches entre SERVICOS_HORIZONTAIS slugs e content files).
 *
 * Phase B7-B (2026-05-13): added 11 entries for COMPLEXOS_TRATAMENTO
 * (7) + TRATAMENTO_AGUAS (4).
 * Phase B10 (2026-05-23): COMPLEXOS reduzido 7 → 3 (removidos eta/ete/etac-cinza/
 *   etac-chuva orphans). Total entries: 14.
 */

import type { ServiceDetailContent } from "./_types";

// B7-A: SERVICOS_HORIZONTAIS (7)
import projetosSobMedida from "./projetos-sob-medida";
import estudoDeTratabilidade from "./estudo-de-tratabilidade";
import readequacaoDeEstacoes from "./readequacao-de-estacoes";
import implantacaoManutencaoOperacao from "./implantacao-manutencao-operacao";
import licenciamentoAmbiental from "./licenciamento-ambiental";
import equipamentosAguaPuraLab from "./equipamentos-agua-pura-laboratorios";
import consultoriaAmbientalAutomacao from "./consultoria-ambiental-automacao";

// B7-B: COMPLEXOS_TRATAMENTO (2 — B10 removed eta/ete/etac-cinza/etac-chuva; B13 removed eteba)
import etdi from "./etdi";
import sistemasDeReuso from "./sistemas-de-reuso";

// B7-B: TRATAMENTO_AGUAS (3 — B13 removed equipamentos-industriais-bancada)
import osmoseReversa from "./osmose-reversa";
import microfiltracaoUltrafiltracao from "./microfiltracao-ultrafiltracao";
import aguaTipo1Laboratorios from "./agua-tipo-1-laboratorios";

const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  // B7-A
  "projetos-sob-medida": projetosSobMedida,
  "estudo-de-tratabilidade": estudoDeTratabilidade,
  "readequacao-de-estacoes": readequacaoDeEstacoes,
  "implantacao-manutencao-operacao": implantacaoManutencaoOperacao,
  "licenciamento-ambiental": licenciamentoAmbiental,
  "equipamentos-agua-pura-laboratorios": equipamentosAguaPuraLab,
  "consultoria-ambiental-automacao": consultoriaAmbientalAutomacao,
  // B7-B COMPLEXOS_TRATAMENTO (B10 reduced to 3; B13 reduced to 2)
  etdi: etdi,
  "sistemas-de-reuso": sistemasDeReuso,
  // B7-B TRATAMENTO_AGUAS
  "osmose-reversa": osmoseReversa,
  "microfiltracao-ultrafiltracao": microfiltracaoUltrafiltracao,
  "agua-tipo-1-laboratorios": aguaTipo1Laboratorios,
};

export function getServiceDetail(slug: string): ServiceDetailContent | null {
  return SERVICE_DETAILS[slug] ?? null;
}

export type { ServiceDetailContent } from "./_types";
