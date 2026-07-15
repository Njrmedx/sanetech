import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Suporte técnico-regulatório para licenciamento prévio, instalação, operação e renovação de empreendimentos com tratamento de efluentes.",

  serviceType: "Licenciamento Ambiental",
  category: "Consultoria Ambiental",
  audience: "Empresas com obrigacao de licenciamento",

  intro: [
    "Licenciamento ambiental tem caminhos formais bem definidos, mas exige documentação técnica que conecte o projeto da estação, o efluente real, o corpo receptor e os parâmetros legais aplicáveis. Erros de caracterização ou de fundamentação técnica resultam em condicionantes adicionais, atrasos ou indeferimento.",
    "A Sanetech provê apoio técnico ao processo de licenciamento: caracterização técnica, laudos, memoriais, projetos como suporte de pedido, atendimento a condicionantes e renovações. Trabalhamos com órgãos estaduais (CETESB, IAP, INEA, FEAM e demais), licenciamentos municipais e processos federais quando aplicável.",
  ],

  gatilhos: [
    "Empreendimento novo em fase de licenciamento prévio (LP)",
    "Solicitação de licença de instalação (LI) ou operação (LO)",
    "Renovação de licença em vencimento",
    "Atendimento a condicionantes técnicas exigidas pelo órgão",
    "Adequação de empreendimento existente a novo enquadramento regulatório",
    "Mudança de processo industrial gerando exigência de reavaliação",
  ],

  processSteps: [
    {
      title: "Análise documental",
      description:
        "Levantamento do enquadramento, licenças anteriores e exigências aplicáveis.",
    },
    {
      title: "Caracterização técnica",
      description:
        "Avaliação do efluente, do corpo receptor e dos parâmetros de interesse.",
    },
    {
      title: "Documentação técnica",
      description:
        "Elaboração de memoriais, laudos e pareceres conforme exigência do órgão.",
    },
    {
      title: "Submissão e acompanhamento",
      description:
        "Apoio técnico durante o trâmite, resposta a exigências.",
    },
    {
      title: "Atendimento a condicionantes",
      description:
        "Implementação técnica ou apoio à execução pelo cliente.",
    },
  ],

  deliverables: [
    "Análise de enquadramento regulatório aplicável",
    "Documentação técnica (memoriais, laudos, pareceres)",
    "Resposta técnica a exigências do órgão licenciador",
    "Apoio em audiências técnicas (quando aplicável)",
    "Documentação técnica de renovação de licença",
  ],

  faq: [
    {
      q: "Atendem licenciamento federal, estadual ou municipal?",
      a: "Trabalhamos com licenciamentos no nível adequado ao empreendimento: estaduais (órgãos como CETESB, IAP, INEA, FEAM), municipais e federais (IBAMA) conforme classe e localização.",
    },
    {
      q: "Vocês acompanham em audiências com o órgão licenciador?",
      a: "Provemos apoio técnico em audiências e reuniões com órgãos licenciadores quando o cliente requisita, em escopo definido no contrato.",
    },
    {
      q: "Garantem aprovação da licença?",
      a: "Não há garantia possível de aprovação. A decisão é do órgão licenciador e depende de múltiplos fatores. Nosso trabalho é fundamentar tecnicamente o pedido com a melhor base disponível.",
    },
    {
      q: "Trabalham só com licenciamento de tratamento de efluentes?",
      a: "Foco em licenciamentos que envolvem tratamento de efluentes e gestão hídrica. Outros aspectos do licenciamento (emissões atmosféricas, resíduos, supressão vegetal) ficam fora do nosso escopo ou são feitos em parceria.",
    },
  ],

  relatedSlugs: [
    "consultoria-ambiental-automacao",
    "estudo-de-tratabilidade",
    "readequacao-de-estacoes",
  ],

  photo: {
    slug: "etdi-monitoramento-03",
    eyebrow: "Registro técnico",
  },

  seo: {
    title: "Licenciamento Ambiental para ETE",
    description:
      "Apoio técnico-regulatório para licenciamento ambiental: caracterização, memoriais, laudos e atendimento a condicionantes. Foco em tratamento de efluentes.",
    keywords: [
      "licenciamento ambiental",
      "consultoria de licenciamento",
      "memorial técnico ambiental",
    ],
  },
};

export default content;
