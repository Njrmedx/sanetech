// content/galeria.ts
//
// Manifest tipado das 3 seções da página /galeria.
// Conteúdo gerado a partir de scripts/build-galeria-assets.mjs + captions
// revisadas pelo owner em 2026-05-22 (ver docs/superpowers/specs/
// 2026-05-22-galeria-design.md §5).
//
// Anti-claim policy: nenhuma menção da marca do fabricante de equipamentos
// pode aparecer em alt/caption/slug/var name (PRD §2.2 AC-01).
// Guard via scripts/audit-strings.mjs (Wave 5).

import type { Route } from "next";

export type GalleryItem = {
  /** Path /public absoluto. Sempre /images/galeria/<section-id>/<slug>.webp */
  src: string;
  /** Descrição factual da cena. Sem menção de marca de fabricante. */
  alt: string;
  /** Caption exibida no hover overlay + lightbox. Referir a categoria de serviço. */
  caption: string;
  /** Width intrínseco do source otimizado (lido do _manifest.json). */
  width: number;
  /** Height intrínseco. */
  height: number;
  /** Col-span no grid 3-col (desktop). Default 1. */
  span?: 1 | 2 | 3;
  /** Marca a foto âncora da seção (~1 por seção). Recebe `priority` no next/image. */
  featured?: boolean;
};

export type GallerySectionData = {
  id: "agua-reagente" | "tratabilidade" | "etdi";
  number: "01" | "02" | "03";
  title: string;
  subtitle: string;
  /** Cross-link eyebrow → página de serviço da Sanetech. */
  serviceHref: Route;
  /** Texto do eyebrow link. */
  serviceLabel: string;
  items: readonly GalleryItem[];
};

export const GALERIA_SECTIONS: readonly GallerySectionData[] = [
  {
    id: "agua-reagente",
    number: "01",
    title: "Água Reagente",
    subtitle: "Produção, manutenção e operação de sistemas de água tipo 1",
    serviceHref: "/solucoes/laboratorios-clinicos-farmaceuticos" as Route,
    serviceLabel: "Ver solução para laboratórios →",
    items: [
      {
        src: "/images/galeria/01-agua-reagente/manutencao-01.webp",
        alt: "Técnico de jaleco operando equipamento de produção de água tipo 1 em laboratório clínico",
        caption: "Manutenção preventiva em sistema de produção de água tipo 1",
        width: 2400,
        height: 1800,
        span: 3,
        featured: true,
      },
      {
        src: "/images/galeria/01-agua-reagente/manutencao-04.webp",
        alt: "Closeup de mãos com luvas inspecionando válvula de sistema de osmose reversa",
        caption: "Inspeção de válvulas e conexões em sistema de osmose reversa",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/01-agua-reagente/manutencao-05.webp",
        alt: "Técnico de óculos operando painel touchscreen de sistema de água ultrapura",
        caption: "Operação de sistema de produção de água tipo 1 em laboratório clínico",
        width: 2400,
        height: 1800,
        span: 2,
      },
      {
        src: "/images/galeria/01-agua-reagente/manutencao-08.webp",
        alt: "Mãos com luvas brancas em manutenção interna de equipamento de água ultrapura",
        caption: "Manutenção interna de sistema de produção de água tipo 1",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/01-agua-reagente/manutencao-10.webp",
        alt: "Técnico segurando cartucho filtrante de sistema de osmose reversa",
        caption: "Troca de cartuchos filtrantes em sistema de água ultrapura",
        width: 1800,
        height: 2400,
        span: 2,
      },
      {
        src: "/images/galeria/01-agua-reagente/manutencao-11.webp",
        alt: "Técnico de jaleco em laboratório clínico próximo a sistema de produção de água",
        caption: "Operação de sistema de água tipo 1 em rotina de laboratório",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/01-agua-reagente/reuso-01.webp",
        alt: "Técnico medindo continuidade em painel elétrico de sistema de reuso de água",
        caption: "Verificação elétrica em sistema de reuso de água de expurgo",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/01-agua-reagente/reuso-02.webp",
        alt: "Técnico ajustando bomba de sistema de reuso de água",
        caption: "Manutenção de bomba em sistema de reuso de expurgo",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/01-agua-reagente/reuso-03.webp",
        alt: "Técnico fazendo leitura com multímetro em painel de controle de sistema de reuso",
        caption: "Diagnóstico elétrico em painel de controle de sistema de reuso",
        width: 1800,
        height: 2400,
        span: 2,
      },
      {
        src: "/images/galeria/01-agua-reagente/reuso-04.webp",
        alt: "Técnicos inspecionando filtro azul de sistema de reuso de água",
        caption: "Inspeção de filtragem em sistema de reuso de expurgo",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/01-agua-reagente/laboratorio-dasa.webp",
        alt: "Interior de laboratório clínico com sistemas de análise automatizados",
        caption: "Implementação de vários sistemas no laboratório DASA — Rio de Janeiro",
        width: 2400,
        height: 1800,
      },
    ],
  },
  {
    id: "tratabilidade",
    number: "02",
    title: "Estudo de Tratabilidade",
    subtitle: "Bancada laboratorial e ensaios piloto",
    serviceHref: "/servicos/estudo-de-tratabilidade" as Route,
    serviceLabel: "Ver serviço de tratabilidade →",
    items: [
      {
        src: "/images/galeria/02-tratabilidade/tratabilidade-rotaevaporador-tecnico.webp",
        alt: "Técnico Sanetech examinando rota-evaporador em bancada de tratabilidade com diagrama de células microbiológicas no quadro",
        caption: "Ensaio de tratabilidade com rota-evaporador e análise microbiológica",
        width: 1600,
        height: 1200,
        span: 3,
        featured: true,
      },
      {
        src: "/images/galeria/02-tratabilidade/estudo-tratabilidade-bancada.webp",
        alt: "Bancada laboratorial com sistema de osmose reversa, balança analítica e amostras de efluente",
        caption: "Bancada de ensaio para estudo de tratabilidade de efluentes",
        width: 640,
        height: 480,
        span: 2,
      },
      {
        src: "/images/galeria/02-tratabilidade/cones-imhoff-sedimentacao.webp",
        alt: "Dois cones Imhoff lado a lado mostrando lodo decantado em diferentes estágios do tratamento",
        caption: "Cones Imhoff: sedimentação do tanque de aeração vs efluente tratado",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/02-tratabilidade/rotaevaporador-ensaio.webp",
        alt: "Pessoa em jaleco segurando frasco com amostra ao lado de rota-evaporador em ensaio",
        caption: "Ensaio com rota-evaporador para fracionamento de efluente",
        width: 433,
        height: 577,
      },
      {
        src: "/images/galeria/02-tratabilidade/rotaevaporador-unidade.webp",
        alt: "Equipamento de rota-evaporador completo com motor verde, frasco e painel de controle",
        caption: "Unidade de rota-evaporador para tratabilidade de efluentes",
        width: 577,
        height: 433,
      },
      {
        src: "/images/galeria/02-tratabilidade/uftv-fracionamento-termico.webp",
        alt: "Unidade UFTV — fracionamento térmico a vácuo com identificação \"Tecnologia Nacional\"",
        caption: "Unidade de fracionamento térmico a vácuo (UFTV) — tecnologia nacional",
        width: 538,
        height: 464,
      },
    ],
  },
  {
    id: "etdi",
    number: "03",
    title: "Operação de ETDI",
    subtitle: "Terceirização de operação de Estações de Tratamento de Despejos Industriais",
    serviceHref: "/servicos/implantacao-manutencao-operacao" as Route,
    serviceLabel: "Ver serviço de operação →",
    items: [
      {
        src: "/images/galeria/03-etdi/agua-tratada-vertedouro.webp",
        alt: "Mão com luva derramando água tratada sobre vertedouro triangular de Estação de Tratamento",
        caption: "Coleta de amostra após tratamento em vertedouro triangular",
        width: 1280,
        height: 960,
        span: 2,
      },
      {
        src: "/images/galeria/03-etdi/etdi-inspecao-tanque-02.webp",
        alt: "Dois técnicos sobre passarela inspecionando tanque de tratamento com clipboard",
        caption: "Inspeção de tanque de aeração em ETDI terceirizada",
        width: 2400,
        height: 1800,
      },
      {
        src: "/images/galeria/03-etdi/etdi-amostra-aeracao.webp",
        alt: "Técnico segurando béquer com amostra de água sobre tanque de aeração externo",
        caption: "Coleta de amostra em tanque de aeração de ETDI",
        width: 2400,
        height: 1800,
      },
      {
        src: "/images/galeria/03-etdi/etdi-monitoramento-03.webp",
        alt: "Dois técnicos sobre passarela com clipboard e medidor sobre tanque de tratamento",
        caption: "Monitoramento de parâmetros em ETDI industrial",
        width: 2400,
        height: 1800,
      },
      {
        src: "/images/galeria/03-etdi/etdi-coleta-skyline.webp",
        alt: "Dois técnicos coletando amostra em tanque externo com skyline urbano",
        caption: "Coleta de amostra em estação de tratamento urbana",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/03-etdi/sopradores-sala.webp",
        alt: "Sala de sopradores com compressores cinzas e tubulação metálica organizada",
        caption: "Sistema de aeração — sala de sopradores em ETDI",
        width: 2400,
        height: 1350,
      },
      {
        src: "/images/galeria/03-etdi/etdi-poco-visita-11.webp",
        alt: "Dois técnicos abrindo escotilha de inspeção de poço de visita em ETDI",
        caption: "Inspeção de poço de visita em rede de tratamento",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/03-etdi/etdi-painel-eletrico-multimetro.webp",
        alt: "Dois técnicos: um anotando em clipboard, outro fazendo medição com multímetro em painel elétrico",
        caption: "Diagnóstico elétrico em painel de controle de ETDI",
        width: 2400,
        height: 1800,
        span: 3,
        featured: true,
      },
      {
        src: "/images/galeria/03-etdi/etdi-sopradores-manutencao.webp",
        alt: "Dois técnicos em manutenção de sopradores ROBUSCHI com termômetro infravermelho",
        caption: "Manutenção de sopradores com medição de temperatura por IR",
        width: 2400,
        height: 1800,
        span: 2,
      },
      {
        src: "/images/galeria/03-etdi/etdi-adensador-lodo.webp",
        alt: "Sala de adensador de lodo com tanques verticais e sistema dosador de químicos",
        caption: "Sala de adensador de lodo em estação de tratamento",
        width: 2400,
        height: 1350,
      },
      {
        src: "/images/galeria/03-etdi/etdi-filtros-pressurizados.webp",
        alt: "Técnico com clipboard analisando filtros pressurizados verdes em sala de tratamento",
        caption: "Análise de filtros pressurizados em ETDI",
        width: 1800,
        height: 2400,
      },
      {
        src: "/images/galeria/03-etdi/etdi-flanges-detalhe.webp",
        alt: "Closeup de flanges metálicos com conexões enferrujadas em tanque externo verde",
        caption: "Detalhe de conexões em tanque de processo",
        width: 1350,
        height: 2400,
      },
    ],
  },
] as const;

/** Flat list de todos os items com section id, útil para lightbox global se algum dia. */
export function getAllItems(): ReadonlyArray<GalleryItem & { sectionId: string }> {
  return GALERIA_SECTIONS.flatMap((s) =>
    s.items.map((i) => ({ ...i, sectionId: s.id })),
  );
}

/**
 * Lookup helper para reutilizar fotos da galeria em outras páginas.
 * Procura por slug (sem extensão e sem prefixo de path).
 * Throws se slug não existir — falha no build time em vez de undefined em runtime.
 *
 * Exemplo:
 *   const photo = getGalleryItem("reuso-03");
 *   // → { src: "/images/galeria/01-agua-reagente/reuso-03.webp", ... }
 */
export function getGalleryItem(slug: string): GalleryItem {
  for (const section of GALERIA_SECTIONS) {
    const found = section.items.find((i) => i.src.endsWith(`/${slug}.webp`));
    if (found) return found;
  }
  throw new Error(
    `[content/galeria] Gallery item not found for slug: "${slug}". ` +
      `Check available slugs in public/images/galeria/_manifest.json.`,
  );
}
