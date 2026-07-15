/**
 * Home page content — services subset, process steps, FAQ items.
 * Single source of truth for app/(site)/page.tsx data binding.
 */

import { MessageSquareText, Microscope, FileCheck } from "lucide-react";
import { SERVICOS_HORIZONTAIS, type ServiceEntry } from "@/lib/content/services-list";
import type { ProcessStep, ProcessStepsProps } from "@/components/blocks/process-steps";
import type { FAQItem } from "@/components/blocks/faq";

function pickService(id: string): ServiceEntry {
  const found = SERVICOS_HORIZONTAIS.find((s) => s.id === id);
  if (!found) {
    throw new Error(`[home-content] SERVICO_HORIZONTAL "${id}" not found`);
  }
  return found;
}

// 4 service cards — PRD §8.1 bloco 3:
// Tratabilidade → S2 · Projeto/Execução ETE → S1 · Operação e Manutenção → S4 · Consultoria + Automação → S7
export const HOMEPAGE_SERVICES: readonly ServiceEntry[] = [
  pickService("S2"),
  pickService("S1"),
  pickService("S4"),
  pickService("S7"),
];

// Approach B — locked 2026-05-13
export const PROCESS_STEPS_HOME: Pick<ProcessStepsProps, "eyebrow" | "title" | "steps"> = {
  eyebrow: "Como começamos",
  title: "Três passos antes da proposta",
  steps: [
    {
      title: "Você descreve o desafio",
      description:
        "Por WhatsApp, formulário ou telefone. Pode ser uma exigência regulatória, uma planta nova, um efluente fora do padrão ou uma ETE que precisa revisão.",
      icon: MessageSquareText,
    },
    {
      title: "Propomos diagnóstico técnico",
      description:
        "Avaliamos o caso e indicamos o próximo passo: visita técnica, ensaio de tratabilidade em laboratório ou consulta documental. Escopo e prazo claros antes de qualquer compromisso.",
      icon: Microscope,
    },
    {
      title: "Entregamos plano técnico",
      description:
        "Memorial descritivo, layout, cronograma de obra e investimento detalhado por etapa. O plano é seu — mesmo se você optar por outro fornecedor.",
      icon: FileCheck,
    },
  ] satisfies ProcessStep[],
};

// 5 FAQ items — copy literal aprovado, anti-claim audited (AC-01/02/08/11/14)
export const HOME_FAQ_ITEMS: FAQItem[] = [
  {
    q: "Vocês trabalham com efluente da minha indústria?",
    a: "Atendemos efluentes de complexidades variadas — química, farmacêutica, alimentícia, papel/celulose, metalurgia, têxtil, entre outros. O caminho começa por um estudo de tratabilidade em laboratório com seu efluente real.",
  },
  {
    q: "O que é estudo de tratabilidade?",
    a: "Ensaio em bancada laboratorial onde simulamos rotas de tratamento aplicadas ao seu efluente. Define a combinação mais eficiente de processos para atingir os padrões de lançamento e dimensiona custo operacional antes da obra.",
  },
  {
    q: "Vocês operam ETE terceirizada?",
    a: "Sim. Operamos estações de tratamento sob contrato — projetadas pela Sanetech ou por terceiros. Fornecemos relatórios técnicos, monitoramento de parâmetros e suporte para auditorias ambientais.",
  },
  {
    q: "Atendem laboratórios clínicos?",
    a: "Sim. Implantamos sistemas de produção de água ultrapura tipo 1 com fabricação customizada e tecnologia de reuso de água de expurgo. Modelo comercial em regime de concessão disponível.",
  },
  {
    q: "Onde a Sanetech atende?",
    a: "Atendemos demandas em todo o território nacional. Equipe técnica móvel para visitas, implantação e manutenção em campo.",
  },
];
