import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Engenharia de solução para conformidade ambiental e automação aplicada a processos industriais relacionados ao tratamento de efluentes e à gestão hídrica.",

  serviceType: "Consultoria Ambiental e Automacao",
  category: "Consultoria Tecnica",
  audience: "Industrias e municipios",

  intro: [
    "Conformidade ambiental e eficiência operacional raramente são resolvidas só com a estação de tratamento. Diagnóstico ambiental, laudos técnicos, atendimento a fiscalizações, automação de unidades manuais, telemetria e supervisão são os blocos que conectam a ETDI ao restante da operação industrial.",
  ],

  gatilhos: [
    "Necessidade de segunda opinião técnica sobre estação existente ou nova",
    "Atendimento a fiscalização ambiental em curso",
    "Diagnóstico ambiental para investimento ou aquisição de planta",
    "ETE manual com necessidade de rastreabilidade ou redução de intervenção humana",
    "Múltiplos sistemas isolados precisando integração (SCADA, ERP)",
    "Telemetria para acompanhamento remoto ou operação assistida",
  ],

  processSteps: [
    {
      title: "Diagnóstico",
      description:
        "Avaliação técnica da operação atual, gargalos de conformidade e oportunidades de automação.",
    },
    {
      title: "Definição de escopo",
      description:
        "Combinação adequada de consultoria, laudos, automação e instrumentação.",
    },
    {
      title: "Projeto técnico",
      description:
        "Especificação detalhada (memoriais, fluxogramas de automação, P&ID com instrumentação).",
    },
    {
      title: "Implementação",
      description: "Execução interna ou externa, conforme escopo.",
    },
    {
      title: "Validação e suporte",
      description:
        "Comissionamento, validação operacional, treinamento, suporte contínuo.",
    },
  ],

  deliverables: [
    "Diagnóstico técnico-ambiental documentado",
    "Laudos técnicos e pareceres conforme demanda",
    "Projeto de automação com especificação de PLC, SCADA, instrumentação",
    "Telemetria e integração com sistemas existentes",
    "Suporte em fiscalizações e auditorias",
    "Treinamento operacional pós-implementação",
  ],

  faq: [
    {
      q: "Vocês fazem laudos para licenciamento?",
      a: "Sim. Elaboramos laudos técnicos para processos de licenciamento ambiental e atendimento a condicionantes. Para o trâmite completo do licenciamento, ver Licenciamento Ambiental.",
    },
    {
      q: "Trabalham com marcas específicas de PLC ou SCADA?",
      a: "Trabalhamos com plataformas estabelecidas no mercado, com escolha baseada em padronização do cliente e adequação ao caso. Definido no diagnóstico inicial.",
    },
    {
      q: "Integra com nosso ERP ou SCADA atual?",
      a: "Sim, quando tecnicamente viável. A integração depende dos protocolos disponíveis nos sistemas legados, avaliado no diagnóstico.",
    },
    {
      q: "Telemetria precisa de internet dedicada?",
      a: "Não obrigatoriamente. Soluções vão desde links dedicados a celular (4G ou 5G) e redes locais com gateway. Escolha conforme criticidade e disponibilidade no local.",
    },
    {
      q: "Atendem retrofit de ETE manual?",
      a: "Sim. Automação retrofit (instrumentação, controle, supervisão) sobre estações originalmente manuais é parte regular do escopo.",
    },
  ],

  relatedSlugs: [
    "implantacao-manutencao-operacao",
    "licenciamento-ambiental",
    "readequacao-de-estacoes",
  ],

  photo: {
    slug: "etdi-adensador-lodo",
    eyebrow: "Automação industrial",
  },

  seo: {
    title: "Consultoria Ambiental e Automação Industrial | Sanetech",
    description:
      "Consultoria técnica ambiental e automação de processos industriais: diagnóstico, laudos, PLC, SCADA, telemetria e sensoriamento online para tratamento.",
    keywords: [
      "consultoria técnica ambiental",
      "automação de ETE",
      "telemetria de tratamento",
    ],
  },
};

export default content;
