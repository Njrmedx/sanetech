import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Diagnóstico técnico e modificação de ETDIs existentes que não atendem aos parâmetros ambientais. Sem reprojetar a estação do zero.",

  serviceType: "Readequacao de Estacao de Tratamento",
  category: "Engenharia Ambiental",
  audience: "Operadores de ETDI existente",

  intro: [
    "Estação de tratamento existente fora do padrão raramente precisa ser substituída inteira. Na maioria dos casos, o problema é localizado: unidade subdimensionada, equipamento desgastado, tecnologia ultrapassada para o efluente atual ou parâmetro regulatório alterado.",
    "A readequação parte de um diagnóstico técnico que identifica o gargalo real e propõe modificação cirúrgica: substituição de unidades, adição de tratamento terciário, automação de processos manuais, troca de equipamentos críticos. Custo proporcional ao gap, não ao sistema inteiro.",
  ],

  gatilhos: [
    "ETDI fora dos parâmetros de licenciamento atual ou novos",
    "Expansão da planta gerando volume ou carga acima do projeto original",
    "Mudança de matéria-prima alterando o efluente",
    "Equipamentos eletromecânicos no fim de vida útil",
    "Nova legislação ambiental aplicável ao corpo receptor",
    "Necessidade de reuso de água ou tratamento terciário",
  ],

  processSteps: [
    {
      title: "Diagnóstico técnico",
      description:
        "Visita à planta, leitura do projeto original, avaliação operacional, análise de parâmetros atuais.",
    },
    {
      title: "Identificação do gargalo",
      description:
        "Cruzamento entre desempenho atual e parâmetros alvo (regulatórios ou operacionais).",
    },
    {
      title: "Estudo de tratabilidade (quando aplicável)",
      description:
        "Validação em bancada da rota proposta no efluente atual.",
    },
    {
      title: "Projeto de modificação",
      description:
        "Especificação técnica das alterações: unidades novas, equipamentos, automação.",
    },
    {
      title: "Implementação",
      description:
        "Execução conforme escopo contratado, interna ou via terceiros, com acompanhamento técnico.",
    },
  ],

  deliverables: [
    "Relatório de diagnóstico técnico da ETDI existente",
    "Identificação técnica dos pontos de não-conformidade",
    "Projeto de modificação com especificações e justificativa",
    "Estimativa de impacto operacional e cronograma de execução",
    "Documentação base para atualização de licenciamento (quando aplicável)",
  ],

  why: {
    title: "Por que readequar antes de substituir",
    paragraphs: [
      "Substituir uma ETDI inteira raramente é a solução técnica ou financeira mais eficiente. A maior parte das estações em não-conformidade tem gargalo localizado: uma unidade subdimensionada, equipamento desgastado ou ausência de tratamento terciário.",
      "Readequação preserva o capital já investido na infraestrutura existente e age cirurgicamente no que precisa mudar. O resultado é menor custo de capital, menor janela de obra e menor risco operacional durante a transição.",
    ],
  },

  faq: [
    {
      q: "Atendem ETDI projetada por outra empresa?",
      a: "Sim. Realizamos diagnóstico e readequação de estações originalmente projetadas ou instaladas por terceiros, após análise técnica inicial.",
    },
    {
      q: "Precisa parar a estação durante a obra?",
      a: "Depende do escopo. Modificações pontuais podem ser feitas com a ETDI em operação, em janelas programadas. Intervenções maiores podem exigir bypass temporário, detalhado no projeto de modificação.",
    },
    {
      q: "Preciso fazer estudo de tratabilidade antes?",
      a: "Quando o efluente atual diverge do projeto original (mudança de processo, expansão, novos contaminantes), sim. O estudo valida a rota antes do investimento na modificação.",
    },
    {
      q: "Vocês fornecem os equipamentos da modificação?",
      a: "Especificamos os equipamentos no projeto. Fornecimento conforme demanda.",
    },
  ],

  relatedSlugs: [
    "estudo-de-tratabilidade",
    "implantacao-manutencao-operacao",
    "consultoria-ambiental-automacao",
  ],

  photo: {
    slug: "etdi-flanges-detalhe",
    eyebrow: "Infraestrutura em adequação",
  },

  seo: {
    title: "Readequação e Modificação de ETDI | Sanetech",
    description:
      "Diagnóstico técnico, retrofit, ampliação e adequação de estações de tratamento existentes. Solução para ETDI fora do padrão ou subdimensionada.",
    keywords: [
      "modificação de estação de tratamento",
      "readequação de ETDI",
      "retrofit de ETDI",
    ],
  },
};

export default content;
