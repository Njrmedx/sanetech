/**
 * /tratamento-aguas — categorical index for TRATAMENTO_AGUAS (cat 3).
 *
 * 4-section flow: hero (stats grid + Droplets icon 280px) / breakdown
 * (3 sub-types with eyebrow+h3+sub) / cards grid (ServicesGrid columns=3) /
 * dark CTA (ContactCard WhatsApp + Workflow icon 240px).
 *
 * Phase B7-B (2026-05-13): cat 3 categorical index.
 * Phase B13 (2026-05-28): 4 → 3; T4 Equipamentos industriais e bancada removido.
 */

import type { Metadata } from "next";
import { Droplets, MessageCircle, Workflow } from "lucide-react";

import { ServicesGrid } from "@/components/blocks/services-grid";
import { ContactCard } from "@/components/blocks/contact-card";
import { TRATAMENTO_AGUAS } from "@/lib/content/services-list";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";
import { buildFaqSchema, type FAQ } from "@/lib/seo/faq-schema";

export const metadata: Metadata = {
  title: "Tratamento de Águas — Sanetech | Catálogo",
  description:
    "Catálogo de linhas de tratamento de águas Sanetech: osmose reversa, microfiltração e ultrafiltração e água tipo 1 para laboratórios.",
  openGraph: {
    title: "Tratamento de Águas — Sanetech",
    description:
      "Três linhas dedicadas: tecnologias de membrana e água tipo 1 para laboratórios.",
    url: "https://sanetech.com.br/tratamento-aguas",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "/tratamento-aguas",
  },
};

const localBusinessSchema = buildLocalBusinessSchema();

const TRATAMENTO_FAQS: readonly FAQ[] = [
  { q: "Qual a diferenca entre osmose reversa e ultrafiltracao?", a: "Osmose reversa retira ions dissolvidos e compostos de baixo peso molecular; ultrafiltracao retira particulas, coloides e macromoleculas mas nao remove ions. A escolha depende dos contaminantes alvo." },
  { q: "O que e agua Tipo 1 e para que serve?", a: "Agua Tipo 1 (ultrapura) e definida pela norma ASTM D1193 e CLSI CLRW: resistividade minima de 18,2 MOhm.cm a 25 graus C. E usada em HPLC, espectroscopia, cultura celular e reagentes criticos." },
  { q: "Microfiltracao serve para tratamento de efluentes?", a: "Sim. Microfiltracao e ultrafiltracao sao usadas como polimento final de ETEs e ETDIs, ou como pre-tratamento para osmose reversa, removendo SST e turbidez." },
  { q: "Qual a vida util das membranas de osmose reversa?", a: "Membranas industriais tem vida util tipica de 3 a 7 anos com manutencao adequada de pre-tratamento e limpeza quimica (CIP) programada." },
];

const tratamentoFaqSchema = buildFaqSchema(TRATAMENTO_FAQS);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: "https://sanetech.com.br/tratamento-aguas",
  name: "Tratamento de Águas — Sanetech",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sanetech.com.br/" },
    { "@type": "ListItem", position: 2, name: "Tratamento de Águas", item: "https://sanetech.com.br/tratamento-aguas" },
  ],
};

const BREAKDOWN = [
  {
    eyebrow: "Osmose Reversa",
    title: "Sistemas de Osmose Reversa",
    sub: "Membrane tech para purificação avançada de água industrial, lab ou alimentação de polimento.",
  },
  {
    eyebrow: "MF e UF",
    title: "Microfiltração e Ultrafiltração",
    sub: "Tecnologias complementares de membrana, frequentemente pareadas com osmose reversa.",
  },
  {
    eyebrow: "Tipo 1",
    title: "Água Tipo 1 para Laboratórios",
    sub: "Sistemas de produção de água reagente para laboratórios clínicos, farmacêuticos e de pesquisa.",
  },
];

export default function TratamentoAguasPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tratamentoFaqSchema) }}
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
                Tratamento de águas.
              </h1>
              <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[600px]">
                Três linhas dedicadas: tecnologias de membrana para purificação avançada e água tipo 1 para laboratórios.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 max-w-[460px]">
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    Linhas
                  </dt>
                  <dd className="mt-1 font-display text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] font-semibold text-foreground leading-none">
                    3
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    Categoria
                  </dt>
                  <dd className="mt-1 font-display text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] font-semibold text-foreground leading-none">
                    Águas
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
              <Droplets
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
              Linhas de tratamento
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
              Linhas disponíveis nesta categoria
            </h2>
          </div>
          <ServicesGrid services={TRATAMENTO_AGUAS} columns={4} />
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
                Casos específicos ou cruzamento de linhas: avaliação técnica direta com a equipe.
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
