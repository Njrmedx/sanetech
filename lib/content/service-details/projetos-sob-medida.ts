import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Engenharia de projeto dimensionada ao seu efluente real, sua planta e seu corpo receptor. Sem soluções de prateleira.",

  serviceType: "Projeto de Engenharia Ambiental",
  category: "Engenharia Ambiental",
  audience: "Industrias e operadores de saneamento",

  intro: [
    "Cada efluente tem composição química, vazão e variabilidade que exigem rota técnica específica. Projetos genéricos resolvem mal: ou subdimensionam, gerando passivo ambiental, ou superdimensionam, queimando capital.",
    "A Sanetech projeta estações e equipamentos sob medida a partir de caracterização real do efluente, restrições de planta e parâmetros regulatórios do corpo receptor. Cada projeto inclui balanço hídrico, fluxograma de processo, dimensionamento de unidades, especificação de equipamentos e memorial descritivo.",
  ],

  gatilhos: [
    "Efluente sem precedente claro (matriz nova, indústria nova, alta variabilidade)",
    "Restrição de área ou layout existente que exige solução customizada",
    "Padrão regulatório específico do corpo receptor, reuso ou parâmetros estaduais",
    "Necessidade de integração com utilidades ou processos existentes",
    "Investimento sob revisão exigindo previsibilidade técnica e financeira",
  ],

  processSteps: [
    {
      title: "Caracterização",
      description:
        "Coleta, análise físico-química e modelagem do efluente real.",
    },
    {
      title: "Definição de rota",
      description:
        "Cruzamento da caracterização com restrições de planta, corpo receptor e padrão regulatório.",
    },
    {
      title: "Anteprojeto",
      description:
        "Fluxograma de processo, balanço hídrico, lista preliminar de unidades.",
    },
    {
      title: "Projeto executivo",
      description:
        "Dimensionamento detalhado, especificação de equipamentos, P&ID, layout, memorial.",
    },
    {
      title: "Entrega",
      description:
        "Documentação técnica completa pronta para execução.",
    },
  ],

  deliverables: [
    "Memorial descritivo do projeto",
    "Fluxograma de processo (PFD) e P&ID",
    "Lista de equipamentos e especificações técnicas",
    "Layout de implantação",
    "Estimativa de custo de implantação e operação",
    "Recomendação de rota técnica fundamentada",
  ],

  faq: [
    {
      q: "Vocês fabricam os equipamentos especificados?",
      a: "Não fabricamos. Projetamos e especificamos os equipamentos adequados ao caso. Fornecimento conforme demanda.",
    },
    {
      q: "Atendem projetos pequenos?",
      a: "Atendemos projetos a partir de demanda técnica específica, independentemente do porte da planta. O dimensionamento é sempre proporcional ao caso.",
    },
    {
      q: "Quanto tempo leva um projeto completo?",
      a: "O prazo varia por complexidade do efluente e profundidade do projeto contratado. Estudo de tratabilidade somado a anteprojeto: tipicamente 4-8 semanas. Projeto executivo subsequente: 6-12 semanas. Cronograma exato no diagnóstico inicial.",
    },
    {
      q: "Vocês também executam a obra?",
      a: "Projeto e execução podem ser contratados em conjunto ou separadamente. Para execução, ver Implantação, Manutenção e Operação.",
    },
  ],

  relatedSlugs: [
    "estudo-de-tratabilidade",
    "readequacao-de-estacoes",
    "implantacao-manutencao-operacao",
  ],

  photo: {
    slug: "etdi-amostra-aeracao",
    eyebrow: "Dimensionamento real",
  },

  seo: {
    title: "Projetos de Estações e Equipamentos Sob Medida | Sanetech",
    description:
      "Projeto técnico e executivo de estações de tratamento dimensionadas ao seu efluente real. Caracterização, balanço hídrico, especificação de equipamentos e memorial descritivo.",
    keywords: [
      "projeto de estação de tratamento",
      "projeto de ETE",
      "dimensionamento de tratamento",
    ],
  },
};

export default content;
