import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Sistemas de reuso por membranas (Microfiltração, Ultrafiltração e Osmose Reversa) para polimento avançado de efluentes tratados em escala industrial.",

  serviceType: "Sistema de Reuso por Membranas",
  category: "Tratamento de Agua Industrial",
  audience: "Industrias com meta de reducao de consumo",

  intro: [
    "Reuso industrial em escala maior tipicamente exige polimento avançado por membranas: microfiltração (MF) e ultrafiltração (UF) removem sólidos e bactérias; osmose reversa (RO) remove sais dissolvidos. A combinação MF/UF/RO produz água de qualidade comparável à água potável a partir de efluente tratado, com aplicação em alimentação de torre de resfriamento, caldeira e processo industrial.",
    "A Sanetech projeta sistemas de reuso por membranas integrados ao tratamento principal de efluentes. A seleção de tecnologia depende da matriz do efluente tratado, da qualidade alvo da água de reuso, da escala e do custo operacional aceitável.",
  ],

  gatilhos: [
    "Indústria com tratamento de efluente já operacional buscando reuso",
    "Necessidade de redução de captação de água nova",
    "Alimentação de torre de resfriamento, caldeira ou processo demandando água tratada",
    "Restrição hídrica regional",
    "Custo crescente de água nova viabilizando opex de reuso",
  ],

  processSteps: [
    {
      title: "Caracterização da água de alimentação",
      description: "Análise da água do efluente tratado.",
    },
    {
      title: "Definição de combinação MF/UF/RO",
      description:
        "Conforme qualidade alvo e características do efluente.",
    },
    {
      title: "Projeto técnico",
      description:
        "Dimensionamento de membranas, pré-tratamento adicional se necessário, sistema de limpeza, recirculação.",
    },
    {
      title: "Implantação",
      description: "Instalação modular ou integrada ao tratamento principal.",
    },
    {
      title: "Operação",
      description:
        "Monitoramento, limpeza programada, troca de membranas conforme vida útil.",
    },
  ],

  deliverables: [
    "Sistema MF/UF/RO dimensionado",
    "Projeto executivo incluindo sistema de limpeza",
    "Especificação de membranas e equipamentos auxiliares",
    "Plano de manutenção e troca",
    "Validação inicial de qualidade da água de reuso",
  ],

  faq: [
    {
      q: "O sistema produz água potável?",
      a: "A qualidade da água de reuso pode atingir parâmetros comparáveis aos de água potável em termos físico-químicos. Classificação como potável depende de validação regulatória adicional e tipicamente não é o uso alvo. Reuso industrial não-potável é o caso de uso padrão.",
    },
    {
      q: "Trabalham com marcas específicas de membrana?",
      a: "Trabalhamos com tecnologias estabelecidas no mercado. A escolha de marca depende de compatibilidade técnica com a matriz, suporte regional e custo total de vida útil.",
    },
    {
      q: "Qual é a vida útil das membranas?",
      a: "Varia por tipo (MF, UF, RO) e pela qualidade da água de alimentação. Tipicamente 3-7 anos com manutenção adequada. Cronograma definido no projeto.",
    },
    {
      q: "É possível operação assistida do sistema de reuso?",
      a: "Sim. Operação terceirizada ou assistida do sistema de reuso pode ser contratada em conjunto com a operação da ETE/ETDI principal.",
    },
  ],

  relatedSlugs: [
    "osmose-reversa",
    "microfiltracao-ultrafiltracao",
    "etdi",
  ],

  photo: {
    slug: "reuso-02",
    eyebrow: "Sistema de reuso",
  },

  seo: {
    title: "Sistemas de Reuso por Membranas (MF, UF, RO) | Sanetech",
    description:
      "Sistemas de reuso por microfiltração, ultrafiltração e osmose reversa para polimento avançado de efluentes industriais tratados.",
    keywords: [
      "sistemas de reuso",
      "membrana de osmose reversa",
      "reuso industrial",
    ],
  },
};

export default content;
