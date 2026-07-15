/**
 * Case 3 — Laboratorial / equipamento tipo 1 em concessão + reuso.
 *
 * AC-01 CRITICAL: NUNCA marca/nome do fabricante (ver PRD §2.2 AC-01).
 * AC-02 CRITICAL: NUNCA "fabricamos" / "fabricante" / "marca própria" /
 *   "patenteado". Frase ratificada "fabricação customizada" verbatim.
 * AC-05: laboratório clínico de médio porte (não nominar).
 * AC-06: Resultados usa fallback PRD §8.12.2 + 1 sentence neutro
 *   "Substituição da água envasada por sistema de produção contínua
 *   com qualidade rastreável." (sem números, sem prazos, sem %).
 *
 * Phase B7-D (2026-05-13).
 */

import type { CaseContent } from "./_types";

const content: CaseContent = {
  segmento: "Laboratório clínico",
  porte: "Médio porte (múltiplos pontos de uso)",
  localizacao: "Capital de São Paulo",
  titulo: "Concessão de equipamento de água tipo 1 com solução de reuso",
  resumo:
    "Substituição de água envasada por equipamento de produção de água tipo 1 com fabricação customizada, em modelo de concessão com manutenção e acompanhamento de qualidade inclusos.",
  desafio: [
    "Laboratório clínico de médio porte dependia de água envasada para análises de alta sensibilidade (HPLC, biologia molecular, química analítica). Crescimento do volume de análises tornou o custo unitário da água envasada insustentável e introduzia variabilidade de lote na qualidade da água.",
    "Análises críticas exigiam água tipo 1 (ASTM D1193 Tipo I) com rastreabilidade documentada, exigência que a solução de água envasada atendia apenas parcialmente.",
  ],
  diagnostico: [
    "Levantamento do perfil de uso identificou múltiplos pontos com requisitos diferenciados (vazão, pressão, qualidade alvo), incompatíveis com sistemas comerciais padronizados de pequeno porte.",
    "Dimensionamento de vazão alvo, qualidade alvo (resistividade, TOC, contagem de partículas) e parâmetros operacionais definiu especificação técnica adequada ao perfil real do laboratório.",
  ],
  solucao: {
    intro:
      "Solução em modelo de concessão (locação com serviço técnico), composta por equipamento customizado e solução complementar de reuso:",
    bullets: [
      "Equipamento de produção de água tipo 1 com fabricação customizada conforme requisitos do laboratório, fornecido sob nossa especificação técnica, com fornecimento conforme demanda",
      "Estágios pré-tratamento, osmose reversa, polimento e UV para TOC, dimensionados conforme perfil de uso",
      "Solução complementar de reuso de água de expurgo, recuperando volume rejeitado para usos gerais (lavagem, alimentação de banho-maria)",
      "Manutenção preventiva e corretiva inclusas em contrato",
      "Acompanhamento periódico da qualidade da água produzida (resistividade, TOC, contagem de partículas)",
    ],
  },
  resultados: [
    "Atingimento dos padrões de lançamento aplicáveis e operação estável conforme contrato. Substituição da água envasada por sistema de produção contínua com qualidade rastreável.",
  ],
  aprendizados: [
    "Modelo de concessão com manutenção e acompanhamento de qualidade inclusos resolve o trade-off entre CAPEX inicial e responsabilidade técnica de manter qualidade tipo 1 ao longo do ciclo operacional.",
    "Replicável a laboratórios clínicos e farmacêuticos com perfil de uso similar: crescimento de consumo, múltiplos pontos de uso, exigência de rastreabilidade documentada.",
  ],
  seo: {
    title: "Água Tipo 1 para Laboratório Clínico | Sanetech",
    description:
      "Implantação de equipamento de produção de água tipo 1 com fabricação customizada em laboratório clínico, modelo de concessão com manutenção e reuso de expurgo.",
  },
};

export default content;
