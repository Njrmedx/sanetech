/**
 * Footer25 — adaptado de @shadcnblocks/footer25 para Sanetech.
 *
 * Adaptacoes:
 * - dados Sanetech (SERVICES + SOLUCOES de lib/content/services-list)
 * - logo transparente local (sem cloudfront externo)
 * - background image externo REMOVIDO (substituido por bg solid wash)
 * - newsletter form: nao existia (footer25 nao trazia)
 * - social media: REMOVIDO (owner nao tem perfis confirmados)
 * - cookie preferences link: NAO ADICIONADO (cookieless)
 * - copy 100% Sanetech (anti-claims clean)
 * - usa Next Link + tipos Route
 * - business info: hardcoded via BUSINESS_INFO single source of truth.
 *   Post-B7-D simplification (2026-05-14): removed env-var-with-fallback
 *   pattern. Para atualizar, editar lib/seo/business-info.ts.
 */

import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { SERVICES, SOLUCOES } from "@/lib/content/services-list";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import { cn } from "@/lib/utils";

const RAZAO_SOCIAL = BUSINESS_INFO.legalName;
const CNPJ = BUSINESS_INFO.cnpj;
const TELEFONE = BUSINESS_INFO.telephone;
const ENDERECO = BUSINESS_INFO.addressFormatted;
const WHATSAPP = BUSINESS_INFO.whatsappNumber;
const EMAIL = BUSINESS_INFO.email;

function buildWhatsAppHref(): string {
  const digits = WHATSAPP.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

interface Footer25Props {
  className?: string;
}

const Footer25 = ({ className }: Footer25Props) => {
  const year = new Date().getFullYear();
  const wa = buildWhatsAppHref();

  return (
    <footer
      className={cn(
        "bg-[var(--color-primary-50)] py-20 lg:py-24",
        className
      )}
    >
      <div className="container-site">
        <div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Coluna 1 — logo + descricao + CTA */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                aria-label="Sanetech — página inicial"
                className="mb-5 inline-flex items-center no-underline [&]:no-underline"
              >
                <Image
                  src="/logo-secundaria-transparent.png"
                  alt="Sanetech — Controle e Automação"
                  width={240}
                  height={72}
                  className="h-14 w-auto"
                />
              </Link>
              <p className="mb-6 text-[14px] leading-relaxed text-muted-foreground max-w-sm">
                Engenharia ambiental e automação para tratamento de efluentes
                industriais e esgoto sanitário. 25+ anos de experiência somada.
              </p>
              <Button asChild variant="primary" size="md" className="rounded-full">
                <Link href={"/contato#diagnostico" as Route}>
                  Solicitar diagnóstico
                </Link>
              </Button>
            </div>

            {/* Coluna 2 — Servicos */}
            <div>
              <h3 className="mb-4 text-[12px] font-medium tracking-[0.08em] text-[var(--color-primary-700)] uppercase">
                Serviços
              </h3>
              <ul className="space-y-3" role="list">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.href}
                      className={cn(
                        "border-b border-transparent text-[14px] text-muted-foreground",
                        "no-underline [&]:no-underline",
                        "transition-[color,border-color] duration-[180ms]",
                        "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                        "motion-reduce:transition-none",
                        "hover:border-[var(--color-primary-700)] hover:text-[var(--color-primary-700)]",
                        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                        "focus-visible:rounded-[var(--radius-sm)]"
                      )}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — Institucional */}
            <div>
              <h3 className="mb-4 text-[12px] font-medium tracking-[0.08em] text-[var(--color-primary-700)] uppercase">
                Institucional
              </h3>
              <ul className="space-y-3" role="list">
                {SOLUCOES.map((solucao) => (
                  <li key={solucao.id}>
                    <Link
                      href={solucao.href}
                      className={cn(
                        "border-b border-transparent text-[14px] text-muted-foreground",
                        "no-underline [&]:no-underline",
                        "transition-[color,border-color] duration-[180ms]",
                        "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                        "motion-reduce:transition-none",
                        "hover:border-[var(--color-primary-700)] hover:text-[var(--color-primary-700)]",
                        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                        "focus-visible:rounded-[var(--radius-sm)]"
                      )}
                    >
                      Soluções
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={"/sobre" as Route}
                    className={cn(
                      "border-b border-transparent text-[14px] text-muted-foreground",
                      "no-underline [&]:no-underline",
                      "transition-[color,border-color] duration-[180ms]",
                      "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                      "motion-reduce:transition-none",
                      "hover:border-[var(--color-primary-700)] hover:text-[var(--color-primary-700)]",
                      "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                      "focus-visible:rounded-[var(--radius-sm)]"
                    )}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contato" as Route}
                    className={cn(
                      "border-b border-transparent text-[14px] text-muted-foreground",
                      "no-underline [&]:no-underline",
                      "transition-[color,border-color] duration-[180ms]",
                      "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                      "motion-reduce:transition-none",
                      "hover:border-[var(--color-primary-700)] hover:text-[var(--color-primary-700)]",
                      "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                      "focus-visible:rounded-[var(--radius-sm)]"
                    )}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 4 — Contato */}
            <div>
              <h3 className="mb-4 text-[12px] font-medium tracking-[0.08em] text-[var(--color-primary-700)] uppercase">
                Contato
              </h3>
              <address className="not-italic space-y-3 text-[14px] text-muted-foreground">
                <div>{ENDERECO}</div>
                <div>
                  <a
                    href={`tel:${TELEFONE.replace(/\D/g, "")}`}
                    className="no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms]"
                  >
                    {TELEFONE}
                  </a>
                </div>
                <div>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms]"
                  >
                    WhatsApp
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms]"
                  >
                    {EMAIL}
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Faixa legal */}
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3 text-[13px] text-muted-foreground">
              <span>{RAZAO_SOCIAL}</span>
              <span className="hidden md:inline text-[var(--color-ink-300)]">•</span>
              <span>CNPJ {CNPJ}</span>
              <span className="hidden md:inline text-[var(--color-ink-300)]">•</span>
              <span>© {year}</span>
            </div>
            <nav aria-label="Links legais" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link
                href={"/politica-de-privacidade" as Route}
                className="text-[13px] text-muted-foreground no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms] motion-reduce:transition-none"
              >
                Privacidade
              </Link>
              <Link
                href={"/termos-de-uso" as Route}
                className="text-[13px] text-muted-foreground no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms] motion-reduce:transition-none"
              >
                Termos
              </Link>
              <Link
                href={"/politica-de-cookies" as Route}
                className="text-[13px] text-muted-foreground no-underline [&]:no-underline hover:text-[var(--color-primary-700)] transition-colors duration-[120ms] motion-reduce:transition-none"
              >
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer25 };
export { Footer25 as Footer };
export default Footer25;
