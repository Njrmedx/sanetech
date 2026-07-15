/**
 * /sobre page content — 6 áreas mapping, 4 princípios, história factual.
 */

import { Beaker, PencilRuler, Activity, BadgeCheck } from "lucide-react";
import {
  SERVICOS_HORIZONTAIS,
  COMPLEXOS_TRATAMENTO,
  type ServiceEntry,
} from "@/lib/content/services-list";
import type { ProcessStep, ProcessStepsProps } from "@/components/blocks/process-steps";

function pickFrom(arr: readonly ServiceEntry[], id: string): ServiceEntry {
  const found = arr.find((s) => s.id === id);
  if (!found) {
    throw new Error(`[sobre-content] entry "${id}" not found in canonical list`);
  }
  return found;
}

// PRD §3.2 lista 6 áreas. Phase B10 (2026-05-23) removeu C2 (ETE — Esgoto Sanitário)
// do catálogo; sobre exibe agora 4 cards únicos após dedup. Consultoria (área 4) +
// Automação (área 5) compartilham a entry canonical S7. Dedup é feito aqui no data
// layer — consumidores recebem SOBRE_AREAS pronto. W2 (copy edits) revisita §3.2.
//
// Canonical id mapping verified against lib/content/services-list.ts:
//   C3 = "ETDI — Despejo Industrial"
//   S4 = "Implantação, manutenção e operação"
//   S7 = "Consultoria ambiental e automação industrial" (cobre §3.2 áreas 4+5)
//   S6 = "Equipamentos de água ultrapura para laboratórios"
const SOBRE_AREAS_RAW: readonly ServiceEntry[] = [
  pickFrom(COMPLEXOS_TRATAMENTO, "C3"),  // 1. Efluentes industriais alta complexidade
  pickFrom(SERVICOS_HORIZONTAIS, "S4"),  // 2. Manutenção e operação
  pickFrom(SERVICOS_HORIZONTAIS, "S7"),  // 3. Consultoria técnica ambiental
  pickFrom(SERVICOS_HORIZONTAIS, "S7"),  // 4. Automação (mesma entry canonical de #3)
  pickFrom(SERVICOS_HORIZONTAIS, "S6"),  // 5. Soluções para laboratórios
];

export const SOBRE_AREAS: readonly ServiceEntry[] = Array.from(
  new Map(SOBRE_AREAS_RAW.map((s) => [s.id, s])).values()
);

// 4 princípios — PRD §8.2 bloco 4
export const SOBRE_PRINCIPIOS: Pick<ProcessStepsProps, "eyebrow" | "title" | "steps"> = {
  eyebrow: "Como trabalhamos",
  title: "Quatro princípios de operação",
  steps: [
    {
      title: "Começamos pelo efluente real",
      description:
        "Estudo de tratabilidade em bancada laboratorial antes de propor solução — sem suposição sobre o que funciona.",
      icon: Beaker,
    },
    {
      title: "Projetamos sob medida",
      description:
        "Dimensionamento técnico baseado em dados do estudo, restrições físicas da planta e padrões de lançamento aplicáveis.",
      icon: PencilRuler,
    },
    {
      title: "Operamos com previsibilidade",
      description:
        "Operação terceirizada com monitoramento contínuo, relatórios técnicos periódicos e SLA claro de conformidade.",
      icon: Activity,
    },
    {
      title: "Acompanhamos a qualidade",
      description:
        "Indicadores de performance documentados, suporte para auditorias ambientais e melhoria contínua do sistema.",
      icon: BadgeCheck,
    },
  ] satisfies ProcessStep[],
};

// História — 3 parágrafos
export const SOBRE_HISTORIA: readonly string[] = [
  "A Sanetech Controle e Automação Ltda. nasceu da convergência entre engenharia ambiental e automação industrial. O foco inicial foi tratamento de efluentes para indústrias com restrições regulatórias de lançamento.",
  "Ao longo dos anos a operação se expandiu para quatro áreas integradas: efluentes industriais de alta complexidade, manutenção e operação de estações existentes, consultoria técnica ambiental com automação de processos e soluções para laboratórios clínicos e farmacêuticos.",
  "Mais de 25 anos somados de experiência técnica. Um único interlocutor cobre o ciclo completo — do diagnóstico inicial em laboratório à operação terceirizada da estação em campo.",
];
