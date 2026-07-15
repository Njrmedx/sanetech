import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Projeto, implantação, readequação e operação de Estações de Tratamento de Despejo Industrial para efluentes com matriz específica de cada processo produtivo.",

  serviceType: "Projeto e Implantacao de ETDI",
  category: "Tratamento Industrial",
  audience: "Industrias com despejo industrial",

  intro: [
    "Efluente industrial é diferente de esgoto sanitário: a composição varia drasticamente por setor (alimentício, têxtil, químico, metal-mecânico, farmacêutico, papel e celulose, entre outros). Cada matriz tem desafios próprios: pH extremo, metais pesados, compostos orgânicos resistentes, alta DQO, óleos, surfactantes.",
    "A Sanetech projeta ETDIs sob caracterização real do efluente. Estudo de tratabilidade em bancada precede o projeto para validar a rota técnica antes do investimento em equipamento. A rota combina pré-tratamento (físico-químico), tratamento principal (biológico ou avançado) e polimento final conforme o caso.",
  ],

  gatilhos: [
    "Efluente industrial sem precedente de tratamento na planta",
    "Mudança de processo industrial alterando a matriz do efluente",
    "ETDI existente fora dos parâmetros de licenciamento",
    "Indústria com licenciamento condicionado à instalação de ETDI",
    "Necessidade de reuso de água como pré-requisito de licença ou eficiência",
  ],

  processSteps: [
    {
      title: "Caracterização",
      description:
        "Análise físico-química do efluente em condições representativas do processo.",
    },
    {
      title: "Estudo de tratabilidade",
      description:
        "Validação em bancada da rota técnica antes do projeto executivo.",
    },
    {
      title: "Projeto técnico",
      description:
        "Pré-tratamento, tratamento principal e polimento dimensionados para a matriz específica.",
    },
    {
      title: "Implantação",
      description: "Execução com acompanhamento técnico.",
    },
    {
      title: "Operação e ajuste",
      description:
        "Comissionamento, partida assistida, ajuste de doses químicas e parâmetros operacionais.",
    },
  ],

  deliverables: [
    "ETDI dimensionada para a matriz específica do efluente",
    "Estudo de tratabilidade documentado",
    "Projeto executivo completo",
    "Especificação de equipamentos",
    "Documentação técnica para licenciamento",
  ],

  why: {
    title: "Por que ETDI começa com estudo de tratabilidade",
    paragraphs: [
      "Efluente industrial varia por setor e por planta. Projetar uma ETDI sem validar a rota técnica no efluente real é apostar em tecnologia padronizada para um problema customizado. O resultado é tipicamente superdimensionamento ou não-conformidade.",
      "O estudo de tratabilidade testa rotas candidatas em bancada com seu efluente real. O relatório define parâmetros dimensionantes e a rota com melhor relação custo/eficiência antes do investimento em equipamento.",
    ],
  },

  faq: [
    {
      q: "Atendem qual setor industrial?",
      a: "Atendemos uma variedade ampla de setores: alimentício, têxtil, químico, metal-mecânico, farmacêutico, papel e celulose, entre outros. Cada matriz é avaliada sob caracterização inicial.",
    },
    {
      q: "Por que estudo de tratabilidade antes do projeto?",
      a: "Porque efluente industrial varia por planta. O estudo valida a rota no seu efluente real antes do investimento, evita superdimensionamento e dá previsibilidade de custo operacional.",
    },
    {
      q: "Vocês fornecem ETDI modular?",
      a: "Soluções modulares são possíveis quando a vazão e o perfil do efluente justificam. A escolha entre obra civil convencional e estação modular é feita no projeto.",
    },
    {
      q: "Quanto tempo entre tratabilidade e ETDI operacional?",
      a: "Tipicamente: tratabilidade 3-6 semanas, projeto executivo 6-12 semanas, implantação 4-12 meses dependendo do porte. Cronograma exato no diagnóstico inicial.",
    },
  ],

  relatedSlugs: [
    "estudo-de-tratabilidade",
    "projetos-sob-medida",
    "readequacao-de-estacoes",
  ],

  photo: {
    slug: "etdi-inspecao-tanque-02",
    eyebrow: "ETDI em operação",
  },

  seo: {
    title: "ETDI: Tratamento de Despejo Industrial",
    description:
      "Projeto e operação de ETDIs para efluentes industriais específicos: caracterização, estudo de tratabilidade, rota customizada por matriz.",
    keywords: [
      "estação de tratamento de despejo industrial",
      "ETDI",
      "tratamento de efluente industrial",
    ],
  },
};

export default content;
