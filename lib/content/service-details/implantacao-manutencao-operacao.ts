import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Ciclo completo de O&M terceirizado: da implantação física à operação contínua da estação, com previsibilidade técnica e contratual.",

  serviceType: "Operacao e Manutencao de ETE",
  category: "Saneamento Industrial",
  audience: "Industrias e condominios",

  intro: [
    "Operar uma estação de tratamento exige equipe técnica especializada, monitoramento contínuo, gestão de insumos químicos e atendimento a fiscalizações. Para a maioria das indústrias, isso fica fora do core business, e o custo de manter operação interna não-especializada se traduz em risco de não-conformidade.",
    "A Sanetech assume o ciclo completo da ETE: implantação física (quando contratada em sequência ao projeto), manutenção preventiva e corretiva, e operação terceirizada full ou assistida, com SLA, relatórios mensais e gestão integrada de insumos.",
  ],

  gatilhos: [
    "Foco do cliente em core business com tratamento como atividade-meio",
    "Falta de equipe técnica interna especializada em tratamento",
    "Necessidade de previsibilidade de custo operacional",
    "ETE recém-projetada precisando de implantação física e operação subsequente",
    "ETE existente com operação irregular ou não-conformidade recorrente",
    "Transferência de risco operacional para parceiro especializado",
  ],

  processSteps: [
    {
      title: "Diagnóstico técnico inicial",
      description: "Visita, avaliação da ETE, dimensionamento de escopo.",
    },
    {
      title: "Proposta",
      description:
        "Definição de modalidade (implantação, manutenção pontual, operação full, operação assistida), KPIs, SLA, cronograma.",
    },
    {
      title: "Mobilização",
      description: "Equipe, ferramental, insumos e protocolos operacionais.",
    },
    {
      title: "Operação contínua",
      description:
        "Monitoramento, registro, relatórios mensais, gestão de químicos, atendimento corretivo.",
    },
    {
      title: "Revisão periódica",
      description:
        "Análise de desempenho, recomendações de otimização e renovação contratual.",
    },
  ],

  deliverables: [
    "Equipe operacional residente ou rotativa conforme porte",
    "Monitoramento contínuo de parâmetros operacionais e ambientais",
    "Relatórios mensais de operação",
    "Gestão de insumos químicos",
    "Plano de manutenção preventiva estruturado",
    "Atendimento corretivo conforme SLA",
    "Suporte em fiscalizações ambientais",
  ],

  why: {
    title: "Modalidades de operação",
    paragraphs: [
      "Operação terceirizada full: equipe Sanetech opera 100% a ETE no site do cliente, com responsabilidade técnica e operacional integral. Cliente concentra esforço no core.",
      "Operação assistida: equipe do cliente opera, Sanetech faz acompanhamento técnico programado, análise de dados operacionais, treinamento e suporte remoto ou presencial sob demanda. Modelo híbrido para clientes que mantêm operação interna mas querem respaldo técnico.",
    ],
  },

  faq: [
    {
      q: "Atendem ETE de outro fornecedor?",
      a: "Sim. Operamos e mantemos ETEs originalmente projetadas por outras empresas, após diagnóstico técnico inicial.",
    },
    {
      q: "Como é o atendimento corretivo?",
      a: "Definido em SLA contratual: frequência de visitas programadas e tempo de resposta para chamados corretivos. Detalhado conforme criticidade da operação.",
    },
    {
      q: "Trabalham com ETE sanitária e industrial?",
      a: "Sim. Operamos os dois tipos, com protocolos e equipe adequada ao perfil de cada caso.",
    },
    {
      q: "Quem responde por não-conformidade ambiental durante a operação?",
      a: "Responsabilidades técnicas e contratuais são definidas em proposta. Variam conforme modalidade (terceirização full vs assistida) e escopo contratado. Detalhamento ocorre no diagnóstico inicial.",
    },
    {
      q: "Inclui peças de reposição?",
      a: "Itens consumíveis e peças críticas conforme escopo contratual. Definido caso a caso na proposta.",
    },
  ],

  relatedSlugs: [
    "readequacao-de-estacoes",
    "consultoria-ambiental-automacao",
    "projetos-sob-medida",
  ],

  photo: {
    slug: "etdi-sopradores-manutencao",
    eyebrow: "Manutenção em campo",
  },

  seo: {
    title: "Implantação, Manutenção e Operação de ETE | Sanetech",
    description:
      "Ciclo completo de O&M de estações de tratamento de efluentes: implantação, manutenção preventiva e corretiva, operação terceirizada e assistida com SLA.",
    keywords: [
      "operação de ETE",
      "manutenção de estação de tratamento",
      "terceirização de ETE",
    ],
  },
};

export default content;
