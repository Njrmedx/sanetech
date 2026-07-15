/**
 * SegmentsBar — segmentos industriais atendidos (asymmetric 2-col + numbered grid).
 *
 * Server Component. Layout: left col (eyebrow + h2 + tagline) / right col 2x4
 * numbered grid de segments com hover border + icon shift. Hero v8 grade.
 */

import Link from "next/link";
import type { Route } from "next";
import {
  FlaskConical,
  Pill,
  Wheat,
  TreeDeciduous,
  Hammer,
  Shirt,
  Beef,
  Hospital,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Segment {
  label: string;
  icon: LucideIcon;
  href: Route;
}

const SEGMENTS: readonly Segment[] = [
  { label: "Química", icon: FlaskConical, href: "/servicos" as Route },
  { label: "Farmacêutica", icon: Pill, href: "/servicos" as Route },
  { label: "Alimentícia", icon: Wheat, href: "/servicos" as Route },
  { label: "Papel e Celulose", icon: TreeDeciduous, href: "/servicos" as Route },
  { label: "Metalurgia", icon: Hammer, href: "/servicos" as Route },
  { label: "Têxtil", icon: Shirt, href: "/servicos" as Route },
  { label: "Frigoríficos", icon: Beef, href: "/servicos" as Route },
  {
    label: "Hospitais e Laboratórios",
    icon: Hospital,
    href: "/tratamento-aguas/agua-tipo-1-laboratorios" as Route,
  },
] as const;

export interface SegmentsBarProps {
  title?: string;
  className?: string;
}

export function SegmentsBar({
  title = "Atendemos diversos segmentos industriais",
  className,
}: SegmentsBarProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-28 bg-background border-y border-[var(--color-border)]",
        className
      )}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — eyebrow + h2 + tagline */}
          <div className="lg:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-4">
              Setores atendidos
            </p>
            <h2 className="text-[clamp(1.75rem,2vw+1rem,2.5rem)] font-display font-semibold text-foreground tracking-[-0.02em] leading-[1.1] text-balance max-w-[440px]">
              {title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-foreground/70 max-w-[420px]">
              Engenharia de tratamento dimensionada por exigência operacional e
              regulatória de cada setor.
            </p>
          </div>

          {/* RIGHT — 2x4 numbered grid */}
          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
              {SEGMENTS.map((segment, idx) => {
                const Icon = segment.icon;
                return (
                  <li key={segment.label}>
                    <Link
                      href={segment.href}
                      className={cn(
                        "group/segment block py-4",
                        "border-b border-[var(--color-border)]",
                        "no-underline [&]:no-underline",
                        "transition-[border-color] duration-[240ms]",
                        "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                        "motion-reduce:transition-none",
                        "hover:border-[var(--color-primary-700)]",
                        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                        "focus-visible:rounded-[var(--radius-sm)]",
                        "active:scale-[0.99] motion-reduce:active:scale-100"
                      )}
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className={cn(
                            "font-display font-medium text-[13px] tabular-nums",
                            "text-[var(--color-primary-300)]",
                            "transition-colors duration-[240ms]",
                            "motion-reduce:transition-none",
                            "group-hover/segment:text-[var(--color-primary-700)]"
                          )}
                          aria-hidden="true"
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "flex-1 text-[17px] lg:text-[18px] font-medium tracking-tight text-foreground",
                            "transition-colors duration-[180ms]",
                            "motion-reduce:transition-none",
                            "group-hover/segment:text-[var(--color-primary-900)]"
                          )}
                        >
                          {segment.label}
                        </span>
                        <Icon
                          className={cn(
                            "size-4 shrink-0 text-[var(--color-ink-300)]",
                            "transition-all duration-[240ms]",
                            "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                            "motion-reduce:transition-none",
                            "group-hover/segment:text-[var(--color-primary-700)]",
                            "group-hover/segment:translate-x-[2px]"
                          )}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SegmentsBar;
