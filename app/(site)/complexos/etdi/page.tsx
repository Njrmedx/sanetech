import type { Metadata } from "next";
import Link from "next/link";
import { Abbr } from "@/components/ui/abbr";
import { ServiceDetailPage } from "@/components/blocks/service-detail-page";
import { getServiceDetail } from "@/lib/content/service-details/_index";
import { COMPLEXOS_TRATAMENTO } from "@/lib/content/services-list";
import { buildServiceSchema } from "@/lib/seo/service-schema";
import { BUSINESS_INFO } from "@/lib/seo/business-info";

const SLUG = "etdi";
const SERVICE_ID = "C3";

const entry = COMPLEXOS_TRATAMENTO.find((s) => s.id === SERVICE_ID)!;
const content = getServiceDetail(SLUG)!;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: `https://sanetech.com.br/complexos/${SLUG}`,
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: `/complexos/${SLUG}`,
  },
};

const serviceSchema = buildServiceSchema({
  name: entry.longTitle ?? entry.title,
  description: content.heroSub,
  serviceType: content.serviceType,
  category: content.category,
  audience: content.audience,
  url: `${BUSINESS_INFO.url}/complexos/${SLUG}`,
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
      name: "Complexos de Tratamento",
      item: "https://sanetech.com.br/complexos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: entry.title,
      item: `https://sanetech.com.br/complexos/${SLUG}`,
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
      <section className="py-10 lg:py-12 bg-background border-t border-[var(--color-border)]">
        <div className="container-site max-w-[760px]">
          <p className="text-[15px] text-foreground/70 leading-relaxed">
            O dimensionamento correto de <Abbr term="ETDI" /> começa pelo{" "}
            <Link
              href="/servicos/estudo-de-tratabilidade"
              className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
            >
              estudo de tratabilidade
            </Link>{" "}
            do efluente real. Conformidade com{" "}
            <Abbr term="CONAMA" /> e normas estaduais aplicáveis. Veja{" "}
            <Link
              href="/galeria"
              className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
            >
              projetos executados na galeria
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
