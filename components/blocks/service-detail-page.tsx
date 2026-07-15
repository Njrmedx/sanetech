/**
 * ServiceDetailPage - super-component for individual service detail routes.
 *
 * Renders 9-section flow: hero / intro / quando aplicar / como funciona /
 * o que recebe / por que (opt) / FAQ / CTA dark + form / related.
 *
 * Reusa: ProcessSteps, FAQ, ServicesGrid, FormDiagnostico, FormContato,
 * BulletListSection. CTA form pivots em entry.cta:
 *   - "diagnostico" => FormDiagnostico (5 fields short)
 *   - "orcamento"   => FormContato (defaultIntent="orcamento", 5 fields + intent dropdown)
 *
 * Related services resolvidos de relatedSlugs via ALL_SERVICES.find.
 *
 * Phase B7-A (2026-05-13): 7 SERVICOS_HORIZONTAIS detail pages.
 */

import { AlertCircle, Check, ClipboardList, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BulletListSection } from "@/components/blocks/bullet-list-section";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { FAQ } from "@/components/blocks/faq";
import { PhotoShowcase } from "@/components/blocks/photo-showcase";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { FormDiagnostico } from "@/components/blocks/form-diagnostico";
import { FormContato } from "@/components/blocks/form-contato";
import { getGalleryItem } from "@/content/galeria";
import {
  type ServiceEntry,
  ALL_SERVICES,
  getDisplayTitle,
} from "@/lib/content/services-list";
import type { ServiceDetailContent } from "@/lib/content/service-details/_types";

export interface ServiceDetailPageProps {
  entry: ServiceEntry;
  content: ServiceDetailContent;
}

export function ServiceDetailPage({ entry, content }: ServiceDetailPageProps) {
  const HeroIcon = entry.icon;
  const longTitle = getDisplayTitle(entry, "page");
  const isOrcamento = entry.cta === "orcamento";
  const CtaIcon = isOrcamento ? ClipboardList : MessageCircle;

  const related = content.relatedSlugs
    .map((slug) => ALL_SERVICES.find((s) => s.href.endsWith(`/${slug}`)))
    .filter((s): s is ServiceEntry => Boolean(s));

  return (
    <>
      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Serviço
              </p>
              <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
                {longTitle}
              </h1>
              <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[600px]">
                {content.heroSub}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="rounded-full px-7"
                >
                  <a href="#cta">
                    {isOrcamento ? "Solicitar orçamento" : "Solicitar diagnóstico"}
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroIcon
                strokeWidth={1}
                className="text-[var(--color-primary-700)]"
                style={{ width: 280, height: 280 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="pb-16 lg:pb-20 bg-background">
        <div className="container-site">
          <div className="max-w-[760px] space-y-5">
            {content.intro.map((p, idx) => (
              <p
                key={idx}
                className="text-[18px] leading-relaxed text-foreground/85"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Quando aplicar */}
      <BulletListSection
        eyebrow="Quando aplicar"
        title="Quando este serviço se aplica"
        items={content.gatilhos}
        icon={AlertCircle}
        side="R"
        bg="tinted"
      />

      {/* 4. Como funciona */}
      <ProcessSteps
        eyebrow="Processo"
        title="Como funciona"
        steps={content.processSteps}
      />

      {/* 5. O que voce recebe */}
      <BulletListSection
        eyebrow="Entregáveis"
        title="O que você recebe"
        items={content.deliverables}
        icon={Check}
        side="L"
        bg="tinted"
      />

      {/* 5.5 Photo showcase (opt) — B11, persistentCaption B12 */}
      {content.photo && (
        <>
          <PhotoShowcase
            variant="solo"
            items={[getGalleryItem(content.photo.slug)]}
            eyebrow={content.photo.eyebrow ?? "Operação real"}
            title={content.photo.title ?? entry.title}
            subtitle={content.photo.subtitle}
            showCta={true}
          />
          {content.photo.persistentCaption && (
            <p className="container-site -mt-12 mb-16 text-sm text-foreground/60 italic text-center">
              {content.photo.persistentCaption}
            </p>
          )}
        </>
      )}

      {/* 6. Por que (opt) */}
      {content.why && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="container-site">
            <div className="max-w-[760px]">
              <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
                {content.why.title}
              </h2>
              <div className="mt-6 space-y-5">
                {content.why.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-[17px] leading-relaxed text-foreground/85"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQ (self-contained section, includes FAQPage JSON-LD inline) */}
      <FAQ
        eyebrow="Dúvidas"
        title="Perguntas frequentes"
        items={content.faq}
        className="bg-background"
      />

      {/* 8. CTA dark + form inline */}
      <section
        id="cta"
        className="py-20 lg:py-28 bg-[var(--color-primary-900)] text-white scroll-mt-24"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-3">
                Próximo passo
              </p>
              <h2 className="text-[clamp(1.875rem,2vw+1rem,2.5rem)] font-display font-semibold tracking-[-0.02em] leading-[1.1] text-balance text-white">
                {isOrcamento
                  ? "Solicite um orçamento para o seu caso."
                  : "Solicite um diagnóstico técnico inicial."}
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/85 max-w-[560px]">
                Envie o contexto do seu projeto. Retornamos com avaliação técnica direta.
              </p>
              <div className="mt-8">
                {isOrcamento ? (
                  <FormContato defaultIntent="orcamento" />
                ) : (
                  <FormDiagnostico />
                )}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CtaIcon
                strokeWidth={1}
                className="text-[var(--color-primary-300)]"
                style={{ width: 240, height: 240 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="container-site">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Veja também
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Serviços relacionados
            </h2>
            <div className="mt-10">
              <ServicesGrid services={related} columns={3} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ServiceDetailPage;
