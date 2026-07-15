import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Testamos seu efluente real em bancada laboratorial para definir a rota de tratamento com melhor relação custo/eficiência, antes de qualquer investimento em equipamento.",

  serviceType: "Estudo de Tratabilidade de Efluentes",
  category: "Laboratorio Ambiental",
  audience: "Industrias com efluentes nao caracterizados",

  intro: [
    "Investir em uma estação de tratamento sem caracterizar o efluente real é apostar em tecnologia. Cada matriz responde de forma diferente a coagulantes, biológicos, oxidantes ou membranas, e o que funciona em laboratório pristine pode falhar na planta.",
    "O estudo de tratabilidade trabalha com seu efluente real coletado in loco. Em bancada laboratorial, testamos diferentes rotas, medimos eficiência por parâmetro alvo e modelamos o tratamento que entregará conformidade ao menor custo operacional. O relatório final é a base técnica do dimensionamento.",
  ],

  gatilhos: [
    "Indústria nova ou expansão de planta com efluente sem histórico de tratamento",
    "ETE existente fora dos parâmetros ambientais (CONAMA 430, normativa estadual)",
    "Mudança de processo industrial alterando a matriz do efluente",
    "Requisito de licenciamento ambiental exigindo validação técnica",
    "Investimento sob avaliação onde a escolha de tecnologia ainda é incerta",
  ],

  processSteps: [
    {
      title: "Coleta de amostra",
      description:
        "Coleta in loco do efluente real em condições representativas do regime operacional.",
    },
    {
      title: "Caracterização físico-química",
      description:
        "Análise dos parâmetros de interesse (DBO, DQO, sólidos, nutrientes, metais, compostos específicos).",
    },
    {
      title: "Testes em bancada",
      description:
        "Aplicação de rotas candidatas (físico-química, biológica, oxidativa, membranas) com medição comparativa.",
    },
    {
      title: "Modelagem da rota",
      description:
        "Cruzamento dos resultados com restrições de planta, corpo receptor e custo operacional.",
    },
    {
      title: "Relatório técnico",
      description:
        "Documentação dos testes, parâmetros dimensionantes e recomendação fundamentada.",
    },
  ],

  deliverables: [
    "Caracterização físico-química do efluente",
    "Resultados detalhados dos testes em bancada",
    "Parâmetros dimensionantes (cargas, tempos, doses)",
    "Recomendação técnica de rota com justificativa",
    "Estimativa preliminar de custo operacional",
    "Base técnica utilizável em licenciamento ou projeto executivo",
  ],

  why: {
    title: "Por que estudo de tratabilidade reduz risco",
    paragraphs: [
      "Evita superdimensionamento (custo de capital desnecessário) e subdimensionamento (não-conformidade futura). A rota é validada antes do investimento, não depois.",
      "Dá previsibilidade de custo operacional: doses de químicos, consumo energético, geração de lodo. Funciona como base técnica para licenciamento e para apresentar ao corpo de fiscalização.",
    ],
  },

  faq: [
    {
      q: "Quanto tempo leva um estudo de tratabilidade?",
      a: "Tipicamente 3-6 semanas entre coleta e relatório final, dependendo da complexidade do efluente e do número de rotas testadas. Cronograma exato definido no diagnóstico inicial.",
    },
    {
      q: "Preciso parar minha produção para a coleta?",
      a: "Não. A coleta é programada em janela representativa do regime operacional normal, sem interrupção da produção.",
    },
    {
      q: "Posso usar o estudo com outro fornecedor de equipamento?",
      a: "Sim. O relatório técnico é documentação independente, propriedade do cliente. Pode embasar projeto executado pela Sanetech ou por terceiros.",
    },
    {
      q: "Atendem qual tipo de efluente?",
      a: "Efluentes industriais (alimentício, têxtil, farmacêutico, químico, metal-mecânico, papel/celulose, entre outros), efluentes sanitários e águas para reuso. Casos atípicos são avaliados sob caracterização inicial.",
    },
    {
      q: "Quanto custa?",
      a: "Custo varia por complexidade da caracterização e número de rotas testadas. Solicitação de diagnóstico técnico inicial via formulário define o escopo.",
    },
  ],

  relatedSlugs: [
    "projetos-sob-medida",
    "readequacao-de-estacoes",
    "consultoria-ambiental-automacao",
  ],

  photo: {
    slug: "estudo-tratabilidade-bancada",
    eyebrow: "Bancada Sanetech",
  },

  seo: {
    title: "Estudo de Tratabilidade de Efluentes Industriais | Sanetech",
    description:
      "Estudo de tratabilidade em bancada laboratorial: caracterização do efluente, definição de rota e parâmetros dimensionantes. Reduza risco antes de investir.",
    keywords: [
      "estudo de tratabilidade de efluentes",
      "tratabilidade em bancada",
      "caracterização de efluente",
    ],
  },
};

export default content;
