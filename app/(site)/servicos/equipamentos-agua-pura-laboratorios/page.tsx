import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/blocks/service-detail-page";
import { getServiceDetail } from "@/lib/content/service-details/_index";
import { SERVICOS_HORIZONTAIS } from "@/lib/content/services-list";
import { buildServiceSchema } from "@/lib/seo/service-schema";
import { BUSINESS_INFO } from "@/lib/seo/business-info";

const SLUG = "equipamentos-agua-pura-laboratorios";
const SERVICE_ID = "S6";

const entry = SERVICOS_HORIZONTAIS.find((s) => s.id === SERVICE_ID)!;
const content = getServiceDetail(SLUG)!;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: `https://sanetech.com.br/servicos/${SLUG}`,
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: `/servicos/${SLUG}`,
  },
};

const serviceSchema = buildServiceSchema({
  name: entry.longTitle ?? entry.title,
  description: content.heroSub,
  serviceType: content.serviceType,
  category: content.category,
  audience: content.audience,
  url: `${BUSINESS_INFO.url}/servicos/${SLUG}`,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sanetech.com.br/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Serviços",
      item: "https://sanetech.com.br/servicos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: entry.title,
      item: `https://sanetech.com.br/servicos/${SLUG}`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailPage entry={entry} content={content} />
    </>
  );
}
