import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Sistemas de Microfiltração e Ultrafiltração para clarificação avançada de água: remoção de sólidos suspensos, bactérias e macromoléculas por separação por membrana.",

  serviceType: "Sistema de Micro e Ultrafiltracao",
  category: "Tratamento de Agua",
  audience: "Industrias e laboratorios",

  intro: [
    "Microfiltração (MF, ~0.1-10 μm) e ultrafiltração (UF, ~0.001-0.1 μm) são tecnologias de membrana para remoção de sólidos suspensos, bactérias, vírus e macromoléculas. São frequentemente usadas como pré-tratamento de osmose reversa, polimento de água industrial ou separação em processos alimentícios e farmacêuticos.",
    "A Sanetech especifica e implementa sistemas MF/UF integrados ao tratamento principal da água ou efluente. Operam em cross-flow (fluxo tangencial) com retrolavagem programada e produzem água clarificada a baixa pressão, com gestão simples de concentrado.",
  ],

  gatilhos: [
    "Pré-tratamento de osmose reversa para estender vida útil",
    "Polimento de água industrial após tratamento primário",
    "Clarificação de água de processo alimentício ou farmacêutico",
    "Separação de proteínas, leveduras ou macromoléculas em processo industrial",
    "Tratamento de água com alta carga de sólidos suspensos ou turbidez",
  ],

  processSteps: [
    {
      title: "Caracterização",
      description:
        "Sólidos suspensos, turbidez, perfil microbiológico, viscosidade.",
    },
    {
      title: "Seleção MF ou UF",
      description:
        "Conforme tamanho de poro alvo (sólidos vs macromoléculas).",
    },
    {
      title: "Projeto técnico",
      description:
        "Membranas, sistema de retrolavagem, dimensionamento de pressão e fluxo.",
    },
    {
      title: "Instalação",
      description: "Execução com integração ao processo existente.",
    },
    {
      title: "Operação",
      description:
        "Retrolavagem programada, limpeza química periódica, troca de membranas conforme vida útil.",
    },
  ],

  deliverables: [
    "Sistema MF ou UF dimensionado",
    "Sistema de retrolavagem e limpeza",
    "Especificação de membranas e equipamentos",
    "Plano de manutenção",
    "Integração ao processo principal",
  ],

  faq: [
    {
      q: "Qual a diferença entre MF e UF?",
      a: "Tamanho de poro. MF (0.1-10 μm) retém sólidos suspensos e bactérias maiores. UF (0.001-0.1 μm) retém também vírus, proteínas e macromoléculas. A escolha depende do alvo de remoção.",
    },
    {
      q: "Como funciona a retrolavagem?",
      a: "Periodicamente, o fluxo é invertido para remover material acumulado na membrana. Pode ser combinada com limpeza química periódica (CIP) para extender a vida útil.",
    },
    {
      q: "MF ou UF substituem osmose reversa?",
      a: "Não. MF/UF removem partículas e macromoléculas mas não removem sais dissolvidos. Para água com sais altos, osmose reversa é necessária.",
    },
    {
      q: "Trabalham com membrana cerâmica ou polimérica?",
      a: "Trabalhamos com ambos. Membrana cerâmica tolera condições mais agressivas (pH, temperatura) e tem vida útil maior, ao custo de investimento inicial maior. Polimérica tem custo menor e é mais difundida.",
    },
  ],

  relatedSlugs: [
    "osmose-reversa",
    "sistemas-de-reuso",
    "projetos-sob-medida",
  ],

  photo: {
    slug: "etdi-filtros-pressurizados",
    eyebrow: "Filtros pressurizados",
  },

  seo: {
    title: "Microfiltração e Ultrafiltração Industrial",
    description:
      "Sistemas de microfiltração e ultrafiltração para clarificação de água: pré-tratamento de osmose reversa, polimento industrial, separação em processos.",
    keywords: [
      "microfiltração",
      "ultrafiltração",
      "membrana de água",
    ],
  },
};

export default content;
