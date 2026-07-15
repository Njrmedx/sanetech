/**
 * Pagination — vanilla. Numeracao truncada + Prev/Next.
 *
 * Pagina atual: bg primary, text white. Hover nao-ativo: bg muted.
 * Truncamento: "1 2 3 ... 10" — calculado a partir de currentPage e totalPages.
 *
 * Spec: DESIGN.md §5.14.
 */

import Link from "next/link";
import type { Route } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Funcao que retorna o href para uma pagina dada (e.g. /blog?page=N). */
  hrefForPage: (page: number) => string;
  className?: string;
  /** Aria-label do <nav>. Default 'Paginacao'. */
  label?: string;
}

/** Algoritmo de truncamento: mantem first, last, current ± 1, com '...' nos gaps. */
function buildPages(current: number, total: number): Array<number | "..."> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: Array<number | "..."> = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push("...");
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total - 1) pages.push("...");
  pages.push(total);
  return pages;
}

const baseItem = cn(
  "inline-flex items-center justify-center min-w-9 h-9 px-3 rounded-[var(--radius-md)]",
  "text-[14px] font-medium",
  "transition-[background-color,color] duration-[120ms]",
  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
  "motion-reduce:transition-none",
  "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
);

export function Pagination({
  currentPage,
  totalPages,
  hrefForPage,
  className,
  label = "Paginação",
}: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = buildPages(currentPage, totalPages);
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  return (
    <nav aria-label={label} className={cn("flex items-center gap-1", className)}>
      {/* Prev */}
      {prevDisabled ? (
        <span
          aria-disabled="true"
          className={cn(baseItem, "text-muted-foreground opacity-50 cursor-not-allowed")}
        >
          <ChevronLeft className="size-4" aria-hidden="true" strokeWidth={2} />
          <span className="visually-hidden">Página anterior</span>
        </span>
      ) : (
        <Link
          href={hrefForPage(currentPage - 1) as Route}
          rel="prev"
          aria-label="Página anterior"
          className={cn(
            baseItem,
            "text-foreground hover:bg-muted"
          )}
        >
          <ChevronLeft className="size-4" aria-hidden="true" strokeWidth={2} />
        </Link>
      )}

      {/* Numeros */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span
            key={`ellipsis-${i}`}
            aria-hidden="true"
            className={cn(baseItem, "text-muted-foreground cursor-default")}
          >
            …
          </span>
        ) : p === currentPage ? (
          <span
            key={p}
            aria-current="page"
            className={cn(
              baseItem,
              "bg-[var(--color-primary-700)] text-white"
            )}
          >
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={hrefForPage(p) as Route}
            className={cn(
              baseItem,
              "text-foreground hover:bg-muted"
            )}
            aria-label={`Página ${p}`}
          >
            {p}
          </Link>
        )
      )}

      {/* Next */}
      {nextDisabled ? (
        <span
          aria-disabled="true"
          className={cn(baseItem, "text-muted-foreground opacity-50 cursor-not-allowed")}
        >
          <ChevronRight className="size-4" aria-hidden="true" strokeWidth={2} />
          <span className="visually-hidden">Próxima página</span>
        </span>
      ) : (
        <Link
          href={hrefForPage(currentPage + 1) as Route}
          rel="next"
          aria-label="Próxima página"
          className={cn(
            baseItem,
            "text-foreground hover:bg-muted"
          )}
        >
          <ChevronRight className="size-4" aria-hidden="true" strokeWidth={2} />
        </Link>
      )}
    </nav>
  );
}

export default Pagination;
