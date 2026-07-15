/**
 * buildServiceSchema — factory for Service JSON-LD schema.
 *
 * Produces a full Schema.org Service object with serviceType, category,
 * optional BusinessAudience, and a 4-area default areaServed.
 *
 * AC-02 compliant: uses provider → Organization reference. NEVER manufacturer.
 *
 * Phase T1.6 SEO Tier 1 Wave B (2026-05-14).
 */

import { BUSINESS_INFO } from "@/lib/seo/business-info";

export interface ServiceSchemaOpts {
  name: string;
  description: string;
  serviceType: string;
  category: string;
  audience?: string;
  url: string;
  areaServed?: Array<{ "@type": string; name: string }>;
}

const DEFAULT_AREA_SERVED = [
  { "@type": "City", name: "Petrópolis" },
  { "@type": "AdministrativeArea", name: "Rio de Janeiro" },
  { "@type": "AdministrativeArea", name: "São Paulo" },
  { "@type": "Country", name: "Brasil" },
];

export function buildServiceSchema(
  opts: ServiceSchemaOpts
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    category: opts.category,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      legalName: BUSINESS_INFO.legalName,
      url: BUSINESS_INFO.url,
    },
    areaServed: opts.areaServed ?? DEFAULT_AREA_SERVED,
  };

  if (opts.audience) {
    schema.audience = {
      "@type": "BusinessAudience",
      audienceType: opts.audience,
    };
  }

  return schema;
}
