import type { ServiceDetailContent } from "./_types";

const content: ServiceDetailContent = {
  heroSub:
    "Equipamentos de produção de água reagente tipo 1 (água ultrapura) para laboratórios clínicos, farmacêuticos e de pesquisa, especificados com fabricação customizada ao perfil de uso.",

  serviceType: "Agua Tipo 1 Ultrapura para Laboratorios",
  category: "Equipamentos Laboratoriais",
  audience: "Laboratorios clinicos e farmaceuticos",

  intro: [
    "Água tipo 1 (água reagente) é classificação técnica para água de pureza ultra-alta usada em análises laboratoriais críticas: HPLC, espectrometria, biologia molecular, análise de traços. Parâmetros típicos: resistividade próxima a 18 MΩ·cm a 25°C, TOC abaixo de 5 ppb, contagem de partículas e bactérias controladas.",
    "A Sanetech especifica equipamentos de produção de água tipo 1 sob fabricação customizada ao perfil de uso do laboratório: vazão, pontos de uso, qualidade alvo e padrões aplicáveis. A linha técnica padrão combina pré-tratamento (filtragem, carvão ativado), osmose reversa, polimento por troca iônica ou eletrodeionização, lâmpada UV para TOC e filtragem final.",
  ],

  gatilhos: [
    "Laboratório precisando de água tipo 1 (reagente) para análises críticas",
    "Sistema padronizado existente abaixo da capacidade ou qualidade exigida",
    "Múltiplos pontos de uso com perfis diferentes",
    "Necessidade de rastreabilidade e validação periódica",
    "Substituição de água envasada por sistema de produção (volume crescente)",
  ],

  processSteps: [
    {
      title: "Diagnóstico",
      description:
        "Perfil de uso, vazão alvo, qualidade exigida, pontos de uso, padrões aplicáveis.",
    },
    {
      title: "Especificação técnica",
      description:
        "Estágios pré-tratamento, OR, polimento (troca iônica ou EDI), UV TOC, filtragem final.",
    },
    {
      title: "Fornecimento conforme demanda",
      description:
        "Especificação adaptada ao caso com fornecimento conforme demanda.",
    },
    {
      title: "Instalação e validação",
      description:
        "Instalação no laboratório, comissionamento, validação de parâmetros (resistividade, TOC).",
    },
    {
      title: "Operação e manutenção",
      description:
        "Manutenção programada (insumos, cartuchos, lâmpadas UV) e suporte técnico.",
    },
  ],

  deliverables: [
    "Equipamento de produção de água tipo 1 customizado",
    "Especificação técnica dos estágios e parâmetros",
    "Validação inicial (resistividade, TOC, contagem de partículas)",
    "Pontos de uso configurados conforme perfil",
    "Plano de manutenção e insumos",
  ],

  why: {
    title: "Por que fabricação customizada",
    paragraphs: [
      "Sistemas comerciais padronizados de água tipo 1 atendem perfis comuns de laboratório de pequeno e médio porte. Para vazão maior, múltiplos pontos de uso com perfis diferentes ou padrões específicos de uso (por exemplo, HPLC vs biologia molecular), sistema customizado pode ser tecnicamente e economicamente superior.",
      "Fabricação customizada significa especificação técnica adaptada ao caso, com fornecimento conforme demanda. O laboratório recebe o sistema dimensionado para seu perfil real, não um sistema padrão adaptado.",
    ],
  },

  faq: [
    {
      q: "Vocês fabricam os equipamentos?",
      a: "Não fabricamos. Os sistemas são fornecidos sob nossa especificação técnica, com fornecimento conforme demanda.",
    },
    {
      q: "Qual é a diferença entre tipo 1, 2 e 3?",
      a: "É uma classificação técnica por pureza. Tipo 1 (reagente) tem maior pureza, exigida para análises críticas (HPLC, traços). Tipo 2 atende análises gerais. Tipo 3 atende limpeza de vidraria e abastecimento de equipamentos menos exigentes. Sanetech foca em tipo 1.",
    },
    {
      q: "Como funciona a validação periódica?",
      a: "Validação típica inclui medição contínua de resistividade no ponto de uso, medição periódica de TOC, contagem de partículas e validação microbiológica conforme exigência do laboratório. Frequência e protocolo definidos no diagnóstico.",
    },
    {
      q: "Atende NBR ou ASTM tipo 1?",
      a: "Especificamos considerando padrões aplicáveis (ASTM, ISO, NBR conforme caso) com parâmetros validados na instalação. Conformidade efetiva depende de operação correta e manutenção programada.",
    },
  ],

  relatedSlugs: [
    "equipamentos-agua-pura-laboratorios",
    "microfiltracao-ultrafiltracao",
    "osmose-reversa",
  ],

  photo: {
    slug: "laboratorio-dasa",
    eyebrow: "Água tipo 1 em operação",
    persistentCaption: "Implementação de vários sistemas no laboratório DASA — Rio de Janeiro",
  },

  seo: {
    title: "Água Tipo 1 Ultrapura para Laboratórios",
    description:
      "Equipamentos de produção de água tipo 1 (ultrapura, reagente) para laboratórios clínicos, farmacêuticos e de pesquisa. Fabricação customizada.",
    keywords: [
      "água tipo 1",
      "água ultrapura para laboratório",
      "água reagente",
    ],
  },
};

export default content;
