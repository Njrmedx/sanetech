/**
 * LegalDocument — Server Component wrapper para páginas legais.
 *
 * Provê:
 *   - Hero header (eyebrow + h1 + subtitle + "Última atualização: X · Versão Y")
 *   - Layout 2-col desktop (content 8/12 + sticky TOC 4/12)
 *   - Mobile TOC como bloco fluído no topo do body
 *   - Cross-refs documentos legais consistentes
 *
 * Consumed by:
 *   - /politica-de-privacidade
 *   - /termos-de-uso
 *   - /politica-de-cookies
 *
 * Spec: 2026-05-14-legal-pages-br-lgpd-design.md §5.
 * Phase B5-Legal (2026-05-14).
 */

import type { ReactNode } from "react";

export interface LegalSection {
  /** kebab-case anchor (ex.: "controlador") */
  id: string;
  /** Título exibido na TOC */
  title: string;
}

export interface LegalDocumentProps {
  /** ex.: "Legal · Privacidade" */
  eyebrow: string;
  /** h1 — ex.: "Política de Privacidade" */
  title: string;
  /** Subtitle abaixo do h1 */
  subtitle: string;
  /** ex.: "14 de maio de 2026" */
  lastUpdated: string;
  /** ex.: "1.0" */
  version?: string;
  /** Entradas da TOC */
  sections: LegalSection[];
  /** Sections JSX renderizadas no main body */
  children: ReactNode;
}

export function LegalDocument({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  version,
  sections,
  children,
}: LegalDocumentProps) {
  return (
    <>
      {/* Hero header */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site">
          <div className="max-w-[820px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              {eyebrow}
            </p>
            <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
              {title}
            </h1>
            <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[680px]">
              {subtitle}
            </p>
            <p className="mt-6 text-[13px] text-muted-foreground">
              Última atualização: <time>{lastUpdated}</time>
              {version ? <> · Versão {version}</> : null}
            </p>
          </div>
        </div>
      </section>

      {/* Body com TOC sticky desktop / fluido mobile */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Mobile TOC — bloco fluído no topo */}
            <nav
              aria-label="Sumário do documento"
              className="lg:hidden bg-[var(--color-primary-50)] rounded-[var(--radius-lg)] p-5"
            >
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Sumário
              </p>
              <ol className="space-y-1.5 text-[14.5px]">
                {sections.map((s, idx) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-foreground/85 no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms] motion-reduce:transition-none"
                    >
                      {idx + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Content principal (8/12 desktop) */}
            <article className="lg:col-span-8 max-w-none">
              {children}
            </article>

            {/* Desktop TOC — sticky right column (4/12) */}
            <aside className="hidden lg:block lg:col-span-4">
              <nav
                aria-label="Sumário do documento"
                className="sticky top-24"
              >
                <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                  Sumário
                </p>
                <ol className="space-y-1.5 text-[14.5px] border-l border-[var(--color-border)] pl-4">
                  {sections.map((s, idx) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-foreground/85 no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms] motion-reduce:transition-none"
                      >
                        {idx + 1}. {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalDocument;
