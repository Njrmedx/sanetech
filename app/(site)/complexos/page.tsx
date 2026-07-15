/**
 * /complexos — categorical index for COMPLEXOS_TRATAMENTO (cat 2).
 *
 * 4-section flow: hero (stats grid + Layers icon 280px) / breakdown
 * (3 sub-types with eyebrow+h3+sub) / cards grid (ServicesGrid columns=4) /
 * dark CTA (ContactCard WhatsApp + Workflow icon 240px).
 *
 * Phase B7-B (2026-05-13): cat 2 categorical index.
 * Phase B10 (2026-05-23): 7 → 3 (ETDI/ETEBA/Reuso); ETA/ETE/ETAC removidos.
 * Phase B13 (2026-05-28): 3 → 2; ETEBA removido.
 */

import type { Metadata } from "next";
import { Layers, MessageCircle, Workflow } from "lucide-react";

import { ServicesGrid } from "@/components/blocks/services-grid";
import { ContactCard } from "@/components/blocks/contact-card";
import { COMPLEXOS_TRATAMENTO } from "@/lib/content/services-list";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";
import { buildFaqSchema, type FAQ } from "@/lib/seo/faq-schema";

export const metadata: Metadata = {
  title: "Complexos de Tratamento — Sanetech | Catálogo",
  description:
    "Catálogo de complexos de tratamento Sanetech: ETDI e sistemas de reuso por membranas. Projeto, implantação e operação.",
  openGraph: {
    title: "Complexos de Tratamento — Sanetech",
    description:
      "Duas frentes de estação de tratamento: despejo industrial (ETDI) e sistemas de reuso por membranas.",
    url: "https://sanetech.com.br/complexos",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "/complexos",
  },
};

const localBusinessSchema = buildLocalBusinessSchema();

const COMPLEXOS_FAQS: readonly FAQ[] = [
  { q: "O que e ETDI e quando eu preciso de uma?", a: "ETDI e necessaria quando o efluente contem cargas industriais que excedem os limites para lancamento direto. Inclui efluentes com pH corrosivo, metais, organicos persistentes ou alta DQO." },
  { q: "Sistemas de reuso de agua exigem licenca especial?", a: "Depende do uso final. Reuso para irrigacao paisagistica e lavagem e menos restrito; reuso industrial ou alimentar exige laudo tecnico e eventualmente autorizacao do orgao ambiental estadual." },
];

const complexosFaqSchema = buildFaqSchema(COMPLEXOS_FAQS);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: "https://sanetech.com.br/complexos",
  name: "Complexos de Tratamento — Sanetech",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sanetech.com.br/" },
    { "@type": "ListItem", position: 2, name: "Complexos de Tratamento", item: "https://sanetech.com.br/complexos" },
  ],
};

const BREAKDOWN = [
  {
    eyebrow: "ETDI",
    title: "Estação de Tratamento de Despejo Industrial",
    sub: "Efluente industrial específico, exige caracterização prévia e rota customizada por matriz.",
  },
  {
    eyebrow: "Sistemas de Reuso",
    title: "Microfiltração, Ultrafiltração e Osmose Reversa",
    sub: "Polimento avançado por membranas para água de reuso em escala industrial.",
  },
];

export default function ComplexosPage() {
  const ctaHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(complexosFaqSchema) }}
      />

      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Categoria
              </p>
              <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
                Complexos de tratamento.
              </h1>
              <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[600px]">
                Duas frentes de estação de tratamento: despejo industrial (ETDI) e sistemas de reuso por membranas.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 max-w-[460px]">
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    Frentes
                  </dt>
                  <dd className="mt-1 font-display text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] font-semibold text-foreground leading-none">
                    2
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    Categoria
                  </dt>
                  <dd className="mt-1 font-display text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] font-semibold text-foreground leading-none">
                    Complexos
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    Anos somados
                  </dt>
                  <dd className="mt-1 font-display text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] font-semibold text-foreground leading-none">
                    25+
                  </dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Layers
                strokeWidth={1}
                className="text-[var(--color-primary-700)]"
                style={{ width: 280, height: 280 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Breakdown */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="max-w-[820px] mb-12">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Tipos de complexo
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              O que existe nesta categoria
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {BREAKDOWN.map((b, idx) => (
              <li key={idx} className="border-l-2 border-[var(--color-primary-300)] pl-5">
                <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-2">
                  {b.eyebrow}
                </p>
                <h3 className="text-[18px] font-semibold text-foreground tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">
                  {b.sub}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Cards grid */}
      <section id="catalogo" className="py-16 lg:py-20 bg-background scroll-mt-24">
        <div className="container-site">
          <div className="mb-10">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Catálogo
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Serviços disponíveis nesta categoria
            </h2>
          </div>
          <ServicesGrid services={COMPLEXOS_TRATAMENTO} columns={4} />
        </div>
      </section>

      {/* 4. CTA dark */}
      <section className="py-20 lg:py-28 bg-[var(--color-primary-900)] text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 lg:order-2">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-3">
                Não encontrou seu caso?
              </p>
              <h2 className="text-[clamp(1.875rem,2vw+1rem,2.5rem)] font-display font-semibold tracking-[-0.02em] leading-[1.1] text-balance text-white">
                Conte sobre o seu projeto.
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/85 max-w-[560px]">
                Casos específicos ou cruzamento de complexos: avaliação técnica direta com a equipe.
              </p>
              <div className="mt-8 max-w-[480px]">
                <ContactCard
                  icon={MessageCircle}
                  title="Falar com a equipe técnica"
                  description="Mensagem direta pelo WhatsApp comercial."
                  cta={{ label: "Abrir WhatsApp", href: ctaHref }}
                  external={true}
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-1 flex justify-center lg:justify-start">
              <Workflow
                strokeWidth={1}
                className="text-[var(--color-primary-300)]"
                style={{ width: 240, height: 240 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
