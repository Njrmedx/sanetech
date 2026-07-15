/**
 * Lista canonical de serviços Sanetech — SINGLE SOURCE OF TRUTH.
 *
 * Phase B2.3 (2026-05-12): taxonomia 3 categorias × 18 itens.
 * Phase B10 (2026-05-23): COMPLEXOS_TRATAMENTO de 7 → 3 (removidos ETA/ETE/ETAC-Cinza/
 *   ETAC-Chuva). S6 renomeado "água pura" → "ultrapura". Total: 14 itens.
 * Phase B13 (2026-05-28): removidos C4 ETEBA + T4 Equipamentos industriais e bancada. Total: 12 itens.
 * AC-01 mantido: SEM nomear fabricante em qualquer entry de tratamento-aguas.
 */

import {
  Compass, FlaskConical, Settings2, Activity, ScrollText, Droplets, Cpu,
  Factory,
  Beaker, Filter,
  type LucideIcon,
} from "lucide-react";
import type { Route } from "next";

export interface ServiceEntry {
  id: string;
  /** Curto, usado no mega-menu / cards. */
  title: string;
  /** Literal owner — usado em h1/breadcrumb/schema (fallback: title). Phase B2.4. */
  longTitle?: string;
  shortDescription: string;
  href: Route;
  icon: LucideIcon;
  cta: "diagnostico" | "orcamento";
}

/** Resolve qual title exibir conforme contexto. Phase B2.4. */
export function getDisplayTitle(
  entry: ServiceEntry,
  mode: "menu" | "page"
): string {
  if (mode === "page" && entry.longTitle) return entry.longTitle;
  return entry.title;
}

// Backward-compat aliases (legacy code may use these names)
export type ServiceIconName = string;
export type SolucaoEntry = ServiceEntry;

// === CATEGORIA 1: SERVIÇOS HORIZONTAIS (7 itens) ===
export const SERVICOS_HORIZONTAIS: readonly ServiceEntry[] = [
  {
    id: "S1",
    title: "Projetos sob medida",
    longTitle: "Projetos de estações e equipamentos sob medida",
    shortDescription:
      "Projetos de estações e equipamentos dimensionados ao seu efluente real.",
    href: "/servicos/projetos-sob-medida" as Route,
    icon: Compass,
    cta: "diagnostico",
  },
  {
    id: "S2",
    title: "Estudos de tratabilidade",
    longTitle:
      "Estudos de Tratabilidade dos efluentes para segurança no investimento",
    shortDescription:
      "Bancada laboratorial define a rota técnica antes do investimento.",
    href: "/servicos/estudo-de-tratabilidade" as Route,
    icon: FlaskConical,
    cta: "diagnostico",
  },
  {
    id: "S3",
    title: "Readequação de estações",
    longTitle:
      "Readequação de Estações de Tratamento que não atendam aos parâmetros ambientais",
    shortDescription:
      "Diagnóstico e adequação de Estações de Tratamento de Despejos Industriais (ETDIs) fora dos parâmetros ambientais.",
    href: "/servicos/readequacao-de-estacoes" as Route,
    icon: Settings2,
    cta: "diagnostico",
  },
  {
    id: "S4",
    title: "Implantação, manutenção e operação",
    longTitle:
      "Implantação, manutenção e operação de estações de tratamento — Terceirização",
    shortDescription:
      "Terceirização completa do ciclo de O&M de estações de tratamento.",
    href: "/servicos/implantacao-manutencao-operacao" as Route,
    icon: Activity,
    cta: "diagnostico",
  },
  {
    id: "S5",
    title: "Licenciamento ambiental",
    longTitle: "Licenciamento Ambiental",
    shortDescription:
      "Suporte técnico-regulatório para licenciamento e renovação.",
    href: "/servicos/licenciamento-ambiental" as Route,
    icon: ScrollText,
    cta: "orcamento",
  },
  {
    id: "S6",
    title: "Equipamentos de água ultrapura para laboratórios",
    longTitle:
      "Comodato de equipamentos de água ultrapura para laboratórios com manutenção completa",
    shortDescription:
      "Comodato de sistemas de produção de água ultrapura tipo 1 com manutenção completa inclusa.",
    href: "/servicos/equipamentos-agua-pura-laboratorios" as Route,
    icon: Droplets,
    cta: "orcamento",
  },
  {
    id: "S7",
    title: "Consultoria ambiental e automação industrial",
    longTitle:
      "Consultoria Ambiental focada para engenharia de solução e automação industrial",
    shortDescription:
      "Engenharia de solução e automação aplicada a processos industriais.",
    href: "/servicos/consultoria-ambiental-automacao" as Route,
    icon: Cpu,
    cta: "diagnostico",
  },
] as const;

// === CATEGORIA 2: COMPLEXOS DE TRATAMENTO (2 tipos) ===
export const COMPLEXOS_TRATAMENTO: readonly ServiceEntry[] = [
  {
    id: "C3",
    title: "ETDI — Despejo Industrial",
    longTitle: "Estação de Tratamento de Despejo Industrial (ETDI)",
    shortDescription:
      "Projeto, implantação, readequação e operação de estações de tratamento de despejo industrial.",
    href: "/complexos/etdi" as Route,
    icon: Factory,
    cta: "diagnostico",
  },
  {
    id: "C7",
    title: "Sistemas de Reuso (MF/UF/RO)",
    longTitle:
      "Sistemas de reuso pelo Processo de Microfiltração, Ultrafiltração e Osmose Reversa",
    shortDescription:
      "Microfiltração, ultrafiltração e osmose reversa para reuso de água.",
    href: "/complexos/sistemas-de-reuso" as Route,
    icon: Filter,
    cta: "diagnostico",
  },
] as const;

// === CATEGORIA 3: TRATAMENTO DE ÁGUAS (3 itens) ===
export const TRATAMENTO_AGUAS: readonly ServiceEntry[] = [
  {
    id: "T1",
    title: "Sistemas de Osmose Reversa",
    longTitle: "Sistemas de Osmose Reversa",
    shortDescription: "Tecnologia de membrana para purificação avançada.",
    href: "/tratamento-aguas/osmose-reversa" as Route,
    icon: Filter,
    cta: "diagnostico",
  },
  {
    id: "T2",
    title: "Microfiltração e Ultrafiltração",
    longTitle: "Microfiltração e Ultrafiltração aplicadas ao sistema",
    shortDescription:
      "Tecnologias complementares de membrana aplicadas ao sistema.",
    href: "/tratamento-aguas/microfiltracao-ultrafiltracao" as Route,
    icon: Beaker,
    cta: "diagnostico",
  },
  {
    id: "T3",
    title: "Água tipo 1 para laboratórios",
    longTitle:
      "Comodato de máquinas de produção de água reagente (tipo 1)",
    shortDescription:
      "Comodato de máquinas de produção de água reagente.",
    href: "/tratamento-aguas/agua-tipo-1-laboratorios" as Route,
    icon: Droplets,
    cta: "orcamento",
  },
] as const;

// === Retrocompat exports (Header/Footer atuais usam estes nomes) ===
export const SERVICES = SERVICOS_HORIZONTAIS;
export const SOLUCOES = TRATAMENTO_AGUAS;
export const ALL_SERVICES = [
  ...SERVICOS_HORIZONTAIS,
  ...COMPLEXOS_TRATAMENTO,
  ...TRATAMENTO_AGUAS,
] as const;

// === Estrutura por categoria (mega-menu 3 cols) ===
// `indexHref` é exibido como atalho "Ver categoria completa" no mega-menu e no
// drawer mobile. `horizontais` é omitido propositadamente — o link "Catálogo
// completo" já direciona para `/servicos` (evita duplicação).
export const SERVICES_BY_CATEGORY = [
  { id: "horizontais", label: "Serviços", items: SERVICOS_HORIZONTAIS },
  {
    id: "complexos",
    label: "Complexos de Tratamento",
    items: COMPLEXOS_TRATAMENTO,
    indexHref: "/complexos" as Route,
  },
  {
    id: "tratamento-aguas",
    label: "Tratamento de Águas",
    items: TRATAMENTO_AGUAS,
    indexHref: "/tratamento-aguas" as Route,
  },
] as const;
