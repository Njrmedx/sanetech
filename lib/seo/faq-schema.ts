/**
 * FAQPage JSON-LD schema builder.
 *
 * Usage:
 *   import { buildFaqSchema, type FAQ } from "@/lib/seo/faq-schema";
 *   const ROUTE_FAQS: FAQ[] = [{ q: "...", a: "..." }, ...];
 *   const faqSchema = buildFaqSchema(ROUTE_FAQS);
 */

export interface FAQ {
  q: string;
  a: string;
}

export function buildFaqSchema(faqs: readonly FAQ[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}
