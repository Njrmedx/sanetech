/**
 * ServicesGrid — flexivel, aceita qualquer lista de ServiceEntry.
 *
 * Server Component. Standard Hero v8: bg-card + border-border, motion-reduce
 * em transitions, focus-visible com shadow-focus-ring.
 */

import Link from "next/link";
import type { Route } from "next";
import type { ServiceEntry } from "@/lib/content/services-list";
import { cn } from "@/lib/utils";

export interface ServicesGridProps {
  services: readonly ServiceEntry[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ServicesGrid({
  services,
  columns = 3,
  className,
}: ServicesGridProps) {
  const cols =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2";

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5",
        cols,
        className
      )}
    >
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.id}
            href={s.href as Route}
            className={cn(
              "group block bg-card border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 lg:p-7",
              "no-underline [&]:no-underline",
              "transition-[border-color,box-shadow] duration-[180ms]",
              "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
              "motion-reduce:transition-none",
              "hover:border-[var(--color-ink-300)] hover:shadow-[var(--shadow-sm)]",
              "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
            )}
          >
            <Icon
              className="h-6 w-6 text-[var(--color-primary-700)] shrink-0"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h3
              className={cn(
                "mt-5 text-[18px] font-semibold text-foreground tracking-tight",
                "transition-[color] duration-[120ms]",
                "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                "motion-reduce:transition-none",
                "group-hover:text-[var(--color-primary-700)]"
              )}
            >
              {s.title}
            </h3>
            <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">
              {s.shortDescription}
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-[14px] font-medium text-[var(--color-primary-700)]">
              Saiba mais
              <span
                className={cn(
                  "transition-transform duration-[180ms]",
                  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                  "motion-reduce:transition-none",
                  "group-hover:translate-x-[3px]"
                )}
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default ServicesGrid;
