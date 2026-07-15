/**
 * Breadcrumb — vanilla, sem Radix.
 *
 * <nav aria-label="Breadcrumb"> com <ol>. ChevronRight 12px entre items.
 * Item ultimo: aria-current="page", ink-700 font-weight 500, sem link.
 * Items anteriores: link, ink-500 hover primary-700.
 *
 * Spec: DESIGN.md §5.13.
 */

import Link from "next/link";
import type { Route } from "next";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: Route | string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className={cn("text-[13px]", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-medium text-[var(--color-ink-700)]"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href as Route}
                  className={cn(
                    "text-[var(--color-ink-500)]",
                    "transition-[color] duration-[120ms]",
                    "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                    "motion-reduce:transition-none",
                    "hover:text-[var(--color-primary-700)]",
                    "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                    "focus-visible:rounded-[var(--radius-sm)]"
                  )}
                >
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  className="size-3 shrink-0 text-[var(--color-ink-300)]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
