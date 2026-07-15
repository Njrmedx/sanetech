/**
 * ServiceDetailContent — shape for per-service detail page content.
 *
 * Each SERVICOS_HORIZONTAIS service has a corresponding <slug>.ts file
 * exporting a default object matching this interface. Consumed by
 * <ServiceDetailPage/> super-component.
 *
 * Phase B7-A (2026-05-13): 7 detail pages.
 * Phase T1.6 (2026-05-14): added serviceType, category, audience for Service schema enrichment.
 * Phase B11 (2026-05-23): added optional photo field for showcase between deliverables and why/FAQ.
 */

export interface ServiceDetailContent {
  /** Hero subtitle (1-2 sentences). Complements ServiceEntry.longTitle. */
  heroSub: string;
  /** Schema.org Service.serviceType — factual service classification. */
  serviceType: string;
  /** Schema.org Service.category — domain/industry category. */
  category: string;
  /** Schema.org BusinessAudience.audienceType — target audience descriptor. Optional. */
  audience?: string;
  /** Intro section: 2 typography paragraphs. */
  intro: string[];
  /** "Quando aplicar" trigger list (5-7 items). */
  gatilhos: string[];
  /** "Como funciona" process steps (4-6, number-led, no icon). */
  processSteps: { title: string; description: string }[];
  /** "O que voce recebe" deliverables list (4-6 items). */
  deliverables: string[];
  /** Optional "Por que" block (rendered only when present). */
  why?: { title: string; paragraphs: string[] };
  /** Service-specific FAQ (4-5 Q&A). */
  faq: { q: string; a: string }[];
  /** Cross-link 3 related service slugs (mix categorias). */
  relatedSlugs: string[];
  /** SEO metadata. */
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
  /**
   * Foto da galeria injetada entre deliverables e why/FAQ.
   * Opcional — content file omite se a página não tem foto adequada.
   * Phase B11 (2026-05-23).
   */
  photo?: {
    /** Slug do GalleryItem em content/galeria.ts (manifest B8 W2). */
    slug: string;
    /** Eyebrow uppercase contextual. Default: "Operação real". */
    eyebrow?: string;
    /** Title H2. Default: entry.title (ServiceEntry). */
    title?: string;
    /** Subtitle 1 linha. Opcional. */
    subtitle?: string;
    /** Persistent caption below image (always visible, not hover). Social proof. Phase B12. */
    persistentCaption?: string;
  };
}
