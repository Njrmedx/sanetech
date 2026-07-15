/**
 * /cases - índice de cases técnicos (B7-D).
 *
 * 3-block flow per spec §2.1 (Filtros SKIPPED MVP, YAGNI até N≥5):
 *   1. Hero (FileText 280px + h1 "Cases técnicos.")
 *   2. Cards grid 3-col (CaseCard inline, link para /cases/[slug])
 *   3. CTA dark (FormDiagnostico + Lightbulb 240px)
 *
 * AC-05 vigilance: cards mostram segmento + porte vago, NUNCA cliente.
 * AC-06 vigilance: resumos sem números inventados (spec content controlled).
 *
 * Phase B7-D (2026-05-13).
 */

import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormDiagnostico } from "@/components/blocks/form-diagnostico";
import { getAllCases } from "@/lib/content/cases/_index";
import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";
import { buildFaqSchema, type FAQ } from "@/lib/seo/faq-schema";

export const metadata: Metadata = {
  title: "Cases de Tratamento de Efluentes e ETEs",
  description:
    "Cases técnicos de projetos, operação, modificação e automação de ETEs em diversos segmentos industriais.",
  openGraph: {
    title: "Cases técnicos | Sanetech",
    description:
      "Como aplicamos tratabilidade, projeto, operação e automação em diferentes segmentos industriais.",
    url: "https://sanetech.com.br/cases",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "/cases",
  },
};

const localBusinessSchema = buildLocalBusinessSchema();

const CASES_FAQS: readonly FAQ[] = [
  { q: "Os cases mostrados sao de clientes reais?", a: "Sim. Cases sao projetos executados reais, apresentados com segmento e porte de forma anonima para preservar a confidencialidade dos clientes." },
  { q: "Voces tem experiencia com efluentes industriais complexos?", a: "Sim. Cases incluem ETDI para industria quimica e ETE sanitaria para condominio: dois perfis de complexidade distintos documentados." },
  { q: "E possivel replicar a solucao do case para minha industria?", a: "Cada caso tem caracteristicas proprias. O caminho correto e um estudo de tratabilidade com seu efluente real antes de qualquer dimensionamento." },
  { q: "Qual e o criterio de sucesso nos projetos?", a: "Atingimento dos parametros de lancamento conforme CONAMA 430 ou norma aplicavel ao segmento, dentro do escopo tecnico contratado." },
  { q: "Voces documentam todos os projetos?", a: "Projetos sao documentados com memoriais descritivos, relatorios de comissionamento e relatorios de monitoramento quando pertinente." },
];

const casesFaqSchema = buildFaqSchema(CASES_FAQS);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cases técnicos Sanetech",
  description:
    "Catálogo de cases de projetos, operação, modificação e automação de estações de tratamento.",
  url: "https://sanetech.com.br/cases",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sanetech.com.br/" },
    { "@type": "ListItem", position: 2, name: "Cases", item: "https://sanetech.com.br/cases" },
  ],
};

export default function Page() {
  const cases = getAllCases();
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(casesFaqSchema) }}
      />

      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Prova social
              </p>
              <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
                Cases técnicos.
              </h1>
              <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[600px]">
                Aplicações reais de{" "}
                <Link href="/servicos/estudo-de-tratabilidade" className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]">
                  estudo de tratabilidade
                </Link>
                , projeto, implantação, operação e automação em diferentes segmentos industriais.
              </p>
              <div className="mt-8">
                <Button asChild variant="primary" size="lg" className="rounded-full px-7">
                  <a href="#cta">Tenho um desafio similar</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FileText
                strokeWidth={1}
                className="text-[var(--color-primary-700)]"
                style={{ width: 280, height: 280 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cards grid */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="max-w-[820px] mb-10">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Catálogo
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Selecionados
            </h2>
          </div>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            role="list"
          >
            {cases.map(({ slug, content }) => (
              <li key={slug}>
                <Link
                  href={`/cases/${slug}` as Route}
                  aria-label={`Ver case: ${content.titulo}`}
                  className="group block bg-card border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 lg:p-7 no-underline [&]:no-underline transition-[border-color,box-shadow] duration-[160ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none hover:border-[var(--color-primary-300)] hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
                >
                  <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]">
                    {content.segmento}
                  </p>
                  <h3 className="mt-3 text-[18px] font-semibold text-foreground tracking-tight">
                    {content.titulo}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">
                    {content.resumo}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-[var(--color-primary-700)]">
                    Ver case <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. CTA dark + form */}
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
                Conte o contexto do efluente, restrições do local e padrão de saída alvo. Retornamos com rota técnica candidata.
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
