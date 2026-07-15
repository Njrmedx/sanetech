/**
 * Home — Hero242 + 7 composed sections (B6a).
 * Layout chrome (Header, Footer, WhatsAppFloater) provido por app/(site)/layout.tsx.
 */

import type { Metadata } from "next";
import { Gauge, MessageCircle } from "lucide-react";

import { Hero242 } from "@/components/shadcnblocks/hero-242";
import { SegmentsBar } from "@/components/blocks/segments-bar";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { ProofStrip } from "@/components/blocks/proof-strip";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { FAQ } from "@/components/blocks/faq";
import { ContactCard } from "@/components/blocks/contact-card";
import { FormDiagnostico } from "@/components/blocks/form-diagnostico";
import { PhotoShowcase } from "@/components/blocks/photo-showcase";
import { getGalleryItem } from "@/content/galeria";
import { LinkArrow } from "@/components/ui/link-arrow";

import {
  HOMEPAGE_SERVICES,
  PROCESS_STEPS_HOME,
  HOME_FAQ_ITEMS,
} from "@/lib/content/home-content";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";

export const metadata: Metadata = {
  title:
    "Sanetech — Tratamento de Efluentes Industriais e ETEs | Tratabilidade e Operação",
  description:
    "Projeto, instalação, operação e manutenção de estações de tratamento de efluentes industriais e esgoto sanitário. Estudo de tratabilidade próprio. Mais de 25 anos de experiência.",
};

const localBusinessSchema = buildLocalBusinessSchema();

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sanetech",
  url: "https://sanetech.com.br",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sanetech.com.br/servicos?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  const ctaHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Hero242 />

      <SegmentsBar />

      <section className="py-16 lg:py-20 bg-background">
        <div className="container-site">
          <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
            Atuação
          </p>
          <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] max-w-[640px] text-balance">
            O que fazemos
          </h2>
          <ServicesGrid
            services={HOMEPAGE_SERVICES}
            columns={4}
            className="mt-10"
          />
          <div className="mt-8">
            <LinkArrow href="/servicos">Ver todos os serviços</LinkArrow>
          </div>
        </div>
      </section>

      <ProofStrip />

      <ProcessSteps {...PROCESS_STEPS_HOME} />

      <PhotoShowcase
        variant="row"
        items={[
          getGalleryItem("reuso-03"),
          getGalleryItem("tratabilidade-rotaevaporador-tecnico"),
          getGalleryItem("etdi-painel-eletrico-multimetro"),
        ]}
        eyebrow="Operações em campo"
        title="O que a Sanetech entrega, em três frentes"
        subtitle="Produção de água tipo 1, estudos de tratabilidade e operação de ETDIs — sempre com técnico próprio."
      />

      <FAQ
        items={HOME_FAQ_ITEMS}
        eyebrow="Perguntas frequentes"
        title="Dúvidas comuns"
      />
      <div className="container-site -mt-4 pb-12">
        <LinkArrow href="/servicos">Conheça todos os serviços</LinkArrow>
      </div>

      <section className="py-20 lg:py-28 bg-[var(--color-primary-900)] text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: large Gauge icon + heading + sub + ContactCard */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Gauge
                strokeWidth={1}
                className="text-[var(--color-primary-300)]"
                style={{ width: 240, height: 240 }}
                aria-hidden="true"
              />
              <div className="mt-8">
                <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-3">
                  Comece o diagnóstico
                </p>
                <h2 className="text-[clamp(1.875rem,2vw+1rem,2.5rem)] font-display font-semibold tracking-[-0.02em] leading-[1.1] text-balance text-white">
                  Vamos avaliar seu caso?
                </h2>
                <p className="mt-5 text-[18px] leading-relaxed text-white/85 max-w-[480px]">
                  Conte sobre seu efluente, sua planta ou sua exigência regulatória. Resposta técnica em até 1 dia útil.
                </p>
              </div>
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
            {/* Right: form */}
            <div className="lg:col-span-7">
              <FormDiagnostico />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
