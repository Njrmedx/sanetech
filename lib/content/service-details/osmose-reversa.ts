import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Sistemas de osmose reversa para purificação avançada de água: remoção de sais, dureza, contaminantes orgânicos e bactérias por separação por membrana.",

  serviceType: "Sistema de Osmose Reversa Industrial",
  category: "Tratamento de Agua",
  audience: "Industrias e laboratorios",

  intro: [
    "Osmose reversa é a tecnologia de separação por membrana que produz a maior pureza entre os processos de tratamento de água em larga escala. Sob pressão, a membrana semipermeável permite passagem de água e retém sais dissolvidos, dureza, contaminantes orgânicos e bactérias. Aplicações vão de água industrial de polimento a alimentação de processos críticos.",
    "A Sanetech especifica e implementa sistemas de osmose reversa dimensionados ao perfil real da água de alimentação e ao uso final: ultrapurificação para laboratório, alimentação de caldeira, processo farmacêutico ou alimentício, dessalinização de água salobra, reuso industrial. Pré-tratamento adequado é parte integral do projeto.",
  ],

  gatilhos: [
    "Necessidade de água purificada para processo industrial ou laboratório",
    "Alimentação de caldeira exigindo baixa dureza e condutividade",
    "Água de fonte com alta concentração de sais ou contaminação dissolvida",
    "Reuso industrial com qualidade alvo elevada",
    "Substituição de tecnologia menos eficiente (deionização por troca iônica em alta vazão)",
  ],

  processSteps: [
    {
      title: "Caracterização da água de alimentação",
      description:
        "Análise físico-química detalhada (TDS, dureza, pH, contaminantes).",
    },
    {
      title: "Definição de pré-tratamento",
      description:
        "Filtragem, abrandamento, anti-incrustante conforme necessário.",
    },
    {
      title: "Projeto técnico",
      description:
        "Dimensionamento de membranas, recuperação, sistema de limpeza CIP, controle.",
    },
    {
      title: "Instalação",
      description: "Execução com integração ao sistema existente do cliente.",
    },
    {
      title: "Operação",
      description:
        "Monitoramento, limpeza programada, troca de membranas conforme vida útil.",
    },
  ],

  deliverables: [
    "Sistema OR dimensionado para vazão e qualidade alvo",
    "Pré-tratamento integrado quando necessário",
    "Especificação de membranas e equipamentos auxiliares",
    "Sistema CIP (clean-in-place)",
    "Plano de manutenção e troca",
  ],

  faq: [
    {
      q: "Vocês fabricam as membranas?",
      a: "Não fabricamos. Trabalhamos com membranas de tecnologias estabelecidas no mercado e fornecemos o sistema integrado especificado para o caso.",
    },
    {
      q: "Qual é a recuperação típica do sistema?",
      a: "Varia por aplicação e qualidade da água de alimentação. Tipicamente 60-80% em sistemas industriais bem dimensionados. Recuperação maior demanda gestão de concentrado.",
    },
    {
      q: "O que fazer com o concentrado (rejeito)?",
      a: "Depende da qualidade do concentrado e da regulamentação aplicável: descarte controlado, integração ao tratamento de efluente, recuperação adicional. Avaliado no projeto.",
    },
    {
      q: "Pode ser combinado com microfiltração ou ultrafiltração?",
      a: "Sim, frequentemente. MF ou UF como pré-tratamento removem sólidos suspensos e proteínas, protegendo a membrana de OR e estendendo a vida útil.",
    },
  ],

  relatedSlugs: [
    "microfiltracao-ultrafiltracao",
    "sistemas-de-reuso",
    "agua-tipo-1-laboratorios",
  ],

  photo: {
    slug: "reuso-01",
    eyebrow: "Sistema RO",
  },

  seo: {
    title: "Osmose Reversa Industrial e para Laboratório",
    description:
      "Sistemas de osmose reversa especificados para o seu uso: ultrapurificação, alimentação de caldeira, processo farmacêutico ou alimentício, reuso industrial.",
    keywords: [
      "osmose reversa",
      "sistema OR",
      "purificação de água por membrana",
    ],
  },
};

export default content;
