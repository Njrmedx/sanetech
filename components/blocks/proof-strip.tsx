/**
 * ProofStrip — bloco "25+ anos de experiencia somada".
 *
 * Unica faixa dark do MVP (resto do site eh light). Server Component.
 * 3 PROOF_ITEMS neutros (sem nominar clientes — AC-05).
 */

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProofItem {
  segmento: string;
  resumo: string;
}

const PROOF_ITEMS: readonly ProofItem[] = [
  {
    segmento: "Indústria farmacêutica",
    resumo:
      "Tratamento de efluente complexo com tratabilidade prévia em bancada.",
  },
  {
    segmento: "Indústria alimentícia",
    resumo: "Operação assistida de ETE com monitoramento contínuo.",
  },
  {
    segmento: "Indústria química",
    resumo:
      "Readequação de ETE existente para atendimento a novos padrões.",
  },
] as const;

export interface ProofStripProps {
  className?: string;
}

export function ProofStrip({ className }: ProofStripProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "bg-[var(--color-primary-900)] text-white py-16 lg:py-20",
        className
      )}
    >
      {/* Background photo — wide aerial industrial ETE */}
      <Image
        src="/images/home/proof-strip-aerial.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover select-none pointer-events-none"
        aria-hidden="true"
      />
      {/* Dark indigo overlay — keeps text ≥4.5:1 contrast */}
      <div
        className="absolute inset-0 bg-[var(--color-primary-900)]/80"
        aria-hidden="true"
      />
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Coluna esquerda — claim + CTA */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-3">
              Experiência aplicada
            </p>
            <h2 className="text-[clamp(1.875rem,2vw+1rem,2.5rem)] font-display font-semibold tracking-[-0.02em] leading-[1.1] text-balance">
              25+ anos somados de experiência em projetos para indústrias
              diversas.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/85 max-w-[480px]">
              Nossa equipe técnica acumula projetos em segmentos com efluentes
              de complexidades variadas — química, farmacêutica, alimentícia,
              papel/celulose, metalurgia e mais.
            </p>
            <Link
              href={"/galeria" as Route}
              className={cn(
                "group mt-7 inline-flex items-center gap-1.5",
                "text-[15px] font-medium text-white",
                "no-underline [&]:no-underline border-b border-white/40 pb-0.5",
                "transition-[border-color] duration-[120ms]",
                "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                "motion-reduce:transition-none",
                "hover:border-white",
                "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(255,255,255,0.32)]",
                "focus-visible:rounded-[var(--radius-sm)]"
              )}
            >
              Ver galeria
              <ArrowRight
                className={cn(
                  "h-4 w-4",
                  "transition-transform duration-[180ms]",
                  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                  "motion-reduce:transition-none",
                  "group-hover:translate-x-[3px]"
                )}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Coluna direita — 3 proof items neutros */}
          <ul className="flex flex-col gap-4" role="list">
            {PROOF_ITEMS.map((it, idx) => (
              <li
                key={idx}
                className={cn(
                  "bg-white/[0.04] border border-white/[0.12] rounded-[var(--radius-xl)] p-5 lg:p-6",
                  "transition-[background-color,border-color] duration-[180ms]",
                  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                  "motion-reduce:transition-none",
                  "hover:bg-white/[0.08] hover:border-white/[0.20]"
                )}
              >
                <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-2">
                  {it.segmento}
                </p>
                <p className="text-[15px] leading-relaxed text-white">
                  {it.resumo}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProofStrip;
