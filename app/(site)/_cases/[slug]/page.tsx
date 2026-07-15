/**
 * /cases/[slug] - case detail dynamic route (B7-D).
 *
 * 7-section flow per spec §2.2:
 *   1. Header (h1 titulo + resumo + 3 pills segmento/porte/localização)
 *   2. Desafio (paragraphs typography)
 *   3. Diagnóstico (paragraphs typography)
 *   4. Solução técnica (intro + bullets Check icons)
 *   5. Resultados (AC-06 fallback verbatim)
 *   6. Aprendizados / replicabilidade
 *   7. CTA dark (FormDiagnostico + Lightbulb 240px)
 *
 * JSON-LD: Article (institutional author Organization, no Person) +
 * BreadcrumbList (Home > Cases > [titulo]).
 *
 * AC-05 vigilance: pills usam segmento + porte + localização vagos
 * (controlled em lib/content/cases content libs).
 * AC-06 vigilance: Resultados block usa fallback PRD §8.12.2 (controlled).
 * AC-01 + AC-02 vigilance: case 3 (tipo-1-laboratorio-clinico) usa
 * frase ratificada "fabricação customizada" verbatim em content.
 *
 * generateStaticParams prerendiza 3 slugs no build, 3 static routes.
 *
 * Phase B7-D (2026-05-13).
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Lightbulb } from "lucide-react";
import { FormDiagnostico } from "@/components/blocks/form-diagnostico";
import { CASE_SLUGS, getCaseContent } from "@/lib/content/cases/_index";

interface Params {
  slug: string;
}

export function generateStaticParams(): { slug: string }[] {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getCaseContent(slug);
  if (!content) return {};
  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: `https://sanetech.com.br/cases/${slug}`,
      type: "article",
      locale: "pt_BR",
    },
    alternates: {
      canonical: `/cases/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const content = getCaseContent(slug);
  if (!content) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.titulo,
    description: content.seo.description,
    author: {
      "@type": "Organization",
      name: "Sanetech",
      url: "https://sanetech.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "Sanetech",
      legalName: "SANETECH CONTROLE E AUTOMAÇÃO LTDA",
      url: "https://sanetech.com.br",
    },
    about: content.segmento,
    mainEntityOfPage: `https://sanetech.com.br/cases/${slug}`,
  };

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
        name: "Cases",
        item: "https://sanetech.com.br/cases",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.titulo,
        item: `https://sanetech.com.br/cases/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Header */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site">
          <div className="max-w-[820px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Case técnico
            </p>
            <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
              {content.titulo}
            </h1>
            <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[680px]">
              {content.resumo}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[content.segmento, content.porte, content.localizacao].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--color-primary-300)] bg-[var(--color-primary-50)] text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Desafio */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="max-w-[760px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Desafio
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Contexto e restrições
            </h2>
            <div className="mt-6 space-y-5">
              {content.desafio.map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Diagnóstico */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-site">
          <div className="max-w-[760px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Diagnóstico
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Caracterização e tratabilidade
            </h2>
            <div className="mt-6 space-y-5">
              {content.diagnostico.map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solução técnica */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="max-w-[820px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Solução técnica
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Rota implantada
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-foreground/85 max-w-[760px]">
              {content.solucao.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {content.solucao.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 mt-1 shrink-0 text-[var(--color-primary-700)]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-[16px] leading-relaxed text-foreground/85">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Resultados (AC-06 fallback verbatim, controlled em content libs) */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-site">
          <div className="max-w-[760px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Resultados
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              O que foi entregue
            </h2>
            <div className="mt-6 space-y-5">
              {content.resultados.map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Aprendizados / replicabilidade */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="max-w-[760px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Replicabilidade
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Aprendizados e aplicabilidade
            </h2>
            <div className="mt-6 space-y-5">
              {content.aprendizados.map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contextual internal link — per F4 Category 6 matrix */}
      {slug === "etdi-industrial-quimica" && (
        <section className="py-10 lg:py-12 bg-background border-t border-[var(--color-border)]">
          <div className="container-site max-w-[760px]">
            <p className="text-[15px] text-foreground/70 leading-relaxed">
              Saiba mais sobre o complexo de{" "}
              <Link
                href="/complexos/etdi"
                className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
              >
                ETDI
              </Link>{" "}
              e as tecnologias aplicadas ao tratamento de despejo industrial.
            </p>
          </div>
        </section>
      )}
      {slug === "ete-condominial" && (
        <section className="py-10 lg:py-12 bg-background border-t border-[var(--color-border)]">
          <div className="container-site max-w-[760px]">
            <p className="text-[15px] text-foreground/70 leading-relaxed">
              Saiba mais sobre nossos{" "}
              <Link
                href="/complexos"
                className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
              >
                complexos de tratamento
              </Link>{" "}
              e as tipologias disponíveis para empreendimentos residenciais.
            </p>
          </div>
        </section>
      )}
      {slug === "tipo-1-laboratorio-clinico" && (
        <section className="py-10 lg:py-12 bg-background border-t border-[var(--color-border)]">
          <div className="container-site max-w-[760px]">
            <p className="text-[15px] text-foreground/70 leading-relaxed">
              Saiba mais sobre o{" "}
              <Link
                href="/tratamento-aguas/agua-tipo-1-laboratorios"
                className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
              >
                sistema de água Tipo 1
              </Link>{" "}
              para laboratórios clínicos e farmacêuticos.
            </p>
          </div>
        </section>
      )}

      {/* 7. CTA dark + form */}
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
                Tem desafio similar?
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/85 max-w-[560px]">
                Envie o contexto do seu efluente e restrições. Retornamos com rota técnica candidata.
              </p>
              <div className="mt-8">
                <FormDiagnostico />
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0">
              <Lightbulb
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
