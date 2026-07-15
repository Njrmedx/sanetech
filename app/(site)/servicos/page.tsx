/**
 * /servicos — index catalog (3 categorias × 18 itens taxonomia).
 *
 * Reusa SERVICOS_HORIZONTAIS (7) + COMPLEXOS_TRATAMENTO (7) + TRATAMENTO_AGUAS (4)
 * de services-list.ts via ServicesGrid columns=4. Alternating bg para ritmo.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Boxes, MessageCircle, Workflow } from "lucide-react";

import { ServicesGrid } from "@/components/blocks/services-grid";
import { ContactCard } from "@/components/blocks/contact-card";

import {
  SERVICOS_HORIZONTAIS,
  COMPLEXOS_TRATAMENTO,
  TRATAMENTO_AGUAS,
} from "@/lib/content/services-list";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";
import { buildFaqSchema, type FAQ } from "@/lib/seo/faq-schema";

export const metadata: Metadata = {
  title: "Serviços e soluções — Sanetech | Catálogo completo",
  description:
    "Catálogo completo de serviços Sanetech: 7 serviços horizontais, 2 tipos de complexos de tratamento e 3 linhas de tratamento de águas para indústrias e laboratórios.",
  alternates: {
    canonical: "/servicos",
  },
};

const localBusinessSchema = buildLocalBusinessSchema();

const SERVICOS_FAQS: readonly FAQ[] = [
  { q: "Qual a diferenca entre ETE e ETDI?", a: "ETE trata esgoto de origem sanitaria. ETDI (Estacao de Tratamento de Despejo Industrial) trata efluentes de processos industriais, que exigem tecnologias especificas por conter compostos organicos, metais ou pH extremo." },
  { q: "O que e readequacao de ETE?", a: "Modificacao tecnica de estacao ja existente para atender novos parametros de lancamento ou aumento de carga organica, sem necessidade de nova estacao." },
  { q: "Voces fazem licenciamento ambiental?", a: "Sim. Preparamos estudos tecnicos, memoriais descritivos e acompanhamos o processo junto a orgaos como INEA-RJ e IBAMA para estacoes de tratamento." },
  { q: "E possivel terceirizar a operacao da ETE?", a: "Sim. Oferecemos operacao assistida ou totalmente terceirizada para ETEs em operacao, incluindo relatorios de monitoramento." },
  { q: "Voces atendem fora de Petropolis?", a: "Atendemos toda a Regiao Serrana RJ, Vale do Paraiba e demais estados do Sudeste conforme escopo do projeto." },
];

const servicosFaqSchema = buildFaqSchema(SERVICOS_FAQS);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: "https://sanetech.com.br/servicos",
  name: "Serviços e soluções — Sanetech",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sanetech.com.br/" },
    { "@type": "ListItem", position: 2, name: "Serviços", item: "https://sanetech.com.br/servicos" },
  ],
};

export default function ServicosPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicosFaqSchema) }}
      />

      {/* 1. Page hero — 2-col with stats + Boxes icon */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: eyebrow + h1 + sub + stats (col-7) */}
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Catálogo
              </p>
              <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
                Serviços e soluções.
              </h1>
              <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[600px]">
                Catálogo completo Sanetech: serviços horizontais, complexos de tratamento e linhas de tratamento de águas — para indústrias com exigência operacional ou regulatória.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-6 max-w-[460px]">
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    Serviços
                  </dt>
                  <dd className="mt-1 font-display text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] font-semibold text-foreground leading-none">
                    18
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    Categorias
                  </dt>
                  <dd className="mt-1 font-display text-[clamp(1.75rem,1.5vw+1rem,2.25rem)] font-semibold text-foreground leading-none">
                    3
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
            {/* Right: large Boxes icon (col-5) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Boxes
                strokeWidth={1}
                className="text-[var(--color-primary-700)]"
                style={{ width: 280, height: 280 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Serviços horizontais (7) — 2-col integrated (text L / image R) */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-12 lg:mb-14">
            <div className="lg:col-span-5">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Categoria 1
              </p>
              <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
                Serviços horizontais
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-foreground/70 max-w-[480px]">
                Projetos, execução, operação, manutenção, licenciamento, consultoria e automação para tratamento de efluentes.
              </p>
            </div>
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <Image
                src="/images/servicos/cat-1-horizontais-blueprint.jpg"
                alt="Projeto técnico de estação de tratamento de efluentes — blueprint com instrumentos de engenharia sobre mesa de trabalho."
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </div>
          <ServicesGrid
            services={SERVICOS_HORIZONTAIS}
            columns={4}
          />
        </div>
      </section>

      {/* 3. Complexos de tratamento (7) — full-bleed dark hero + grid below */}
      <section className="bg-background">
        {/* Image-as-canvas hero with text overlay center-low */}
        <div className="relative isolate overflow-hidden bg-[var(--color-primary-900)] text-white">
          <Image
            src="/images/servicos/cat-2-complexos-aerial.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover select-none pointer-events-none"
            aria-hidden="true"
          />
          {/* Bottom-up gradient: dense base for text, fades up to reveal aerial atmosphere */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-900)]/95 via-[var(--color-primary-900)]/70 to-[var(--color-primary-900)]/35"
            aria-hidden="true"
          />
          <div className="container-site relative z-10 py-24 lg:py-32">
            <div className="max-w-[640px]">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-3">
                Categoria 2
              </p>
              <h2 className="text-[clamp(1.875rem,2vw+1rem,2.5rem)] font-display font-semibold tracking-[-0.02em] leading-[1.1] text-balance text-white">
                Complexos de tratamento
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-white/85 max-w-[560px]">
                Duas frentes de estação: despejo industrial (ETDI) e sistemas de reuso por membranas.
              </p>
            </div>
          </div>
        </div>
        {/* Grid below on light surface */}
        <div className="container-site py-16 lg:py-20">
          <ServicesGrid
            services={COMPLEXOS_TRATAMENTO}
            columns={4}
          />
        </div>
      </section>

      {/* 4. Tratamento de águas (4) — 2-col INVERTED (image L / text R) for composition variety */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-12 lg:mb-14">
            {/* Text — DOM 1st (mobile-first), visually 2nd on desktop via order */}
            <div className="lg:col-span-5 lg:order-2">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Categoria 3
              </p>
              <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
                Tratamento de águas
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-foreground/70 max-w-[480px]">
                Três linhas dedicadas: osmose reversa, micro/ultra filtração e água tipo 1 para laboratórios.
              </p>
            </div>
            {/* Image — DOM 2nd, visually 1st on desktop */}
            <div className="lg:col-span-7 lg:order-1 relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <Image
                src="/images/servicos/cat-3-aguas-membrane.jpg"
                alt="Gota de água ultrapura em tubo de dispensação de laboratório — fotografia macro."
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </div>
          <ServicesGrid
            services={TRATAMENTO_AGUAS}
            columns={4}
          />
        </div>
      </section>

      {/* 5. CTA final — 2-col with Workflow icon */}
      <section className="py-20 lg:py-28 bg-[var(--color-primary-900)] text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text + ContactCard — DOM 1st, visually 2nd on desktop */}
            <div className="lg:col-span-7 lg:order-2">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-3">
                Não encontrou?
              </p>
              <h2 className="text-[clamp(1.875rem,2vw+1rem,2.5rem)] font-display font-semibold tracking-[-0.02em] leading-[1.1] text-balance text-white">
                Conte sobre seu caso.
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/85 max-w-[560px]">
                Casos específicos ou cruzamento de serviços: avaliação técnica direta com a{" "}
                <Link
                  href="/sobre"
                  className="text-[var(--color-primary-300)] underline hover:text-white"
                >
                  equipe técnica
                </Link>
                .
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
            {/* Workflow icon — DOM 2nd, visually 1st on desktop */}
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
