/**
 * ProcessSteps — N passos numerados, com icon opcional editorial-inversion.
 *
 * Server Component. Sem icon: layout original (big number primary-300 +
 * title + desc). Com icon: editorial inversion — large icon (primary-700,
 * stroke-1) assume papel de visual anchor, numero vira eyebrow pequeno.
 * Layout grid 1col mobile / Ncols desktop.
 *
 * Phase B6c (2026-05-13): icon opcional adicionado para Home ProcessSteps
 * "Três passos antes da proposta".
 */

import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  title: string;
  description: string;
  /** Icon Lucide opcional. Quando presente, render usa editorial inversion. */
  icon?: LucideIcon;
}

export interface ProcessStepsProps {
  eyebrow?: string;
  title: string;
  steps: ProcessStep[];
  className?: string;
}

export function ProcessSteps({
  eyebrow,
  title,
  steps,
  className,
}: ProcessStepsProps) {
  if (steps.length === 0) return null;

  const colsClass =
    steps.length >= 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : steps.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <section className={cn("py-16 lg:py-20 bg-background", className)}>
      <div className="container-site">
        {eyebrow && (
          <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] max-w-[640px] text-balance">
          {title}
        </h2>

        <ol
          className={cn(
            "mt-12 grid grid-cols-1 gap-10 lg:gap-12",
            colsClass
          )}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const num = String(idx + 1).padStart(2, "0");
            return (
              <li key={idx}>
                {Icon ? (
                  // Editorial inversion — icon dominates, number demoted to eyebrow tag
                  <>
                    <Icon
                      className="text-[var(--color-primary-700)]"
                      strokeWidth={1}
                      style={{ width: 80, height: 80 }}
                      aria-hidden="true"
                    />
                    <p
                      aria-hidden="true"
                      className="mt-6 text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)]"
                    >
                      Passo {num}
                    </p>
                    <h3 className="mt-2 text-[20px] font-semibold text-foreground tracking-tight">
                      <span className="visually-hidden">
                        Passo {idx + 1}:
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed max-w-[36ch]">
                      {step.description}
                    </p>
                  </>
                ) : (
                  // Default — big number leads
                  <>
                    <p
                      aria-hidden="true"
                      className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-bold text-[var(--color-primary-300)] leading-none tracking-[-0.02em]"
                    >
                      {num}
                    </p>
                    <h3 className="mt-4 text-[18px] font-semibold text-foreground tracking-tight">
                      <span className="visually-hidden">
                        Passo {idx + 1}:
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed max-w-[36ch]">
                      {step.description}
                    </p>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default ProcessSteps;
