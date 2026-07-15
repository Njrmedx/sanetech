/**
 * Case 1 — Industrial / ETDI matriz complexa.
 *
 * AC-05: indústria química de médio porte (não nominar cliente).
 * AC-06: Resultados usa fallback PRD §8.12.2 verbatim.
 *
 * Phase B7-D (2026-05-13).
 */

import type { CaseContent } from "./_types";

const content: CaseContent = {
  segmento: "Indústria química",
  porte: "Médio porte",
  localizacao: "Interior de São Paulo",
  titulo: "Implantação de ETDI para efluente com matriz complexa",
  resumo:
    "Caracterização do efluente, validação de rota técnica em bancada e implantação de estação de tratamento dimensionada para a matriz específica da indústria.",
  desafio: [
    "Indústria química de médio porte gerava efluente com pH variável, alta carga orgânica e presença de compostos orgânicos resistentes a tratamento biológico convencional. ETE existente operava no limite do projeto original e fora dos padrões CONAMA 430 em algumas janelas de operação.",
    "Requisitos regulatórios estaduais aplicáveis ao corpo receptor exigiam parâmetros mais rigorosos que o projeto original previa, com risco de não-renovação de licença ambiental.",
  ],
  diagnostico: [
    "Caracterização físico-química completa do efluente em condições representativas (períodos de operação normal e picos de produção) revelou alta variabilidade e presença de compostos com baixa biodegradabilidade.",
    "Estudo de tratabilidade em bancada validou rotas candidatas e identificou combinação físico-química + biológica + polimento como a mais aderente ao perfil real do efluente e ao padrão regulatório alvo.",
  ],
  solucao: {
    intro:
      "A rota implantada combinou três etapas principais com automação básica para estabilidade operacional:",
    bullets: [
      "Pré-tratamento físico-químico com coagulação e floculação para remoção de sólidos suspensos e compostos orgânicos resistentes",
      "Tratamento biológico por lodos ativados dimensionado para a carga orgânica variável",
      "Polimento por filtração e desinfecção final conforme padrão do corpo receptor",
      "Automação de dosagem química e monitoramento online de pH e vazão",
      "Implantação com partida assistida e operação acompanhada nos primeiros ciclos",
    ],
  },
  resultados: [
    "Atingimento dos padrões de lançamento aplicáveis e operação estável conforme contrato.",
  ],
  aprendizados: [
    "O case demonstra a aplicabilidade da combinação físico-química + biológica + polimento para efluentes industriais com matriz variável e compostos de difícil degradação. A validação prévia em bancada foi determinante para evitar superdimensionamento e definir doses químicas com previsibilidade.",
    "Replicável a indústrias químicas, farmacêuticas e correlatas com perfil similar de efluente, especialmente quando há exigência regulatória estadual mais rigorosa que CONAMA 430.",
  ],
  seo: {
    title: "ETDI para Indústria Química | Sanetech",
    description:
      "Implantação de Estação de Tratamento de Despejo Industrial para indústria química de médio porte: caracterização, tratabilidade em bancada e rota físico-química combinada com biológica.",
  },
};

export default content;
