/**
 * LocalBusiness schema builder for Sanetech.
 *
 * Upgrades Organization -> LocalBusiness + ProfessionalService.
 * Adds geo, openingHours, areaServed, serviceArea (200km radius).
 *
 * Owner-validated fields:
 *   - latitude/longitude: -22.4786, -43.2095 (AI-proposed for Posse, Petropolis-RJ).
 *     Owner should validate via Google Maps; pass opts override if different.
 *   - openingHours: Mo-Fr 08:00-18:00 default. Owner override via opts if different.
 *   - hasMap: add post-GBP-claim with Google Maps CID URL.
 */

import { BUSINESS_INFO, BUSINESS_ADDRESS_SCHEMA } from "@/lib/seo/business-info";

export interface LocalBusinessSchemaOptions {
  /** Override AI-proposed coordinates with owner-validated values from Google Maps. */
  latitude?: number;
  longitude?: number;
  /** Google Maps CID URL after GBP verification. */
  hasMap?: string;
  /** Custom opening hours if different from default Mo-Fr 08:00-18:00. */
  openingHours?: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
}

const DEFAULT_LATITUDE = -22.26085060968823;
const DEFAULT_LONGITUDE = -43.079152511732836;

const DEFAULT_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
];

const AREA_SERVED = [
  { "@type": "City", name: "Petrópolis" },
  { "@type": "Place", name: "Posse, Petrópolis" },
  { "@type": "Place", name: "Itaipava, Petrópolis" },
  { "@type": "Place", name: "Cascatinha, Petrópolis" },
  { "@type": "Place", name: "Quitandinha, Petrópolis" },
  { "@type": "City", name: "Teresópolis" },
  { "@type": "City", name: "Magé" },
  { "@type": "City", name: "Areal" },
  { "@type": "City", name: "Rio de Janeiro" },
  { "@type": "City", name: "São Paulo" },
  { "@type": "City", name: "Volta Redonda" },
  { "@type": "City", name: "Belo Horizonte" },
  { "@type": "AdministrativeArea", name: "Vale do Aço, Minas Gerais" },
  { "@type": "Country", name: "Brasil" },
];

export function buildLocalBusinessSchema(
  opts: LocalBusinessSchemaOptions = {},
): Record<string, unknown> {
  const latitude = opts.latitude ?? DEFAULT_LATITUDE;
  const longitude = opts.longitude ?? DEFAULT_LONGITUDE;
  const openingHours = opts.openingHours ?? DEFAULT_OPENING_HOURS;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    image: `${BUSINESS_INFO.url}/logo-principal.png`,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    taxID: BUSINESS_INFO.cnpj,
    iso6523Code: `0007:${BUSINESS_INFO.cnpj.replace(/\D/g, "")}`,
    address: BUSINESS_ADDRESS_SCHEMA,
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    openingHoursSpecification: openingHours,
    areaServed: AREA_SERVED,
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude,
        longitude,
      },
      geoRadius: "200000",
    },
  };

  if (opts.hasMap) {
    schema.hasMap = opts.hasMap;
  }

  return schema;
}
