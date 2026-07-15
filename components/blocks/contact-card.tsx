/**
 * ContactCard — card reutilizavel de canal de contato.
 *
 * Server Component. icon + title + description + CTA. Suporta external
 * (target=_blank rel=noopener noreferrer) — render branch separado para
 * Next Link vs <a> nativo (evita ts-expect-error).
 */

import Link from "next/link";
import type { Route } from "next";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: { label: string; href: string };
  external?: boolean;
  className?: string;
}

const CARD_CLASSES = cn(
  "group bg-card border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 lg:p-7",
  "transition-[border-color,box-shadow] duration-[180ms]",
  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
  "motion-reduce:transition-none",
  "hover:border-[var(--color-ink-300)] hover:shadow-[var(--shadow-sm)]"
);

const CTA_CLASSES = cn(
  "mt-5 inline-flex items-center gap-1.5",
  "text-[14px] font-medium text-[var(--color-primary-700)]",
  "no-underline [&]:no-underline",
  "transition-[color] duration-[120ms]",
  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
  "motion-reduce:transition-none",
  "hover:text-[var(--color-primary-900)]",
  "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
  "focus-visible:rounded-[var(--radius-sm)]"
);

const ARROW_CLASSES = cn(
  "transition-transform duration-[180ms]",
  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
  "motion-reduce:transition-none",
  "group-hover:translate-x-[3px]"
);

export function ContactCard({
  icon: Icon,
  title,
  description,
  cta,
  external = false,
  className,
}: ContactCardProps) {
  return (
    <article className={cn(CARD_CLASSES, className)}>
      <Icon
        className="h-7 w-7 text-[var(--color-primary-700)] shrink-0"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <h3 className="mt-5 text-[18px] font-semibold text-foreground tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">
        {description}
      </p>
      {external ? (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={CTA_CLASSES}
        >
          {cta.label}
          <span className={ARROW_CLASSES} aria-hidden="true">
            →
          </span>
        </a>
      ) : (
        <Link href={cta.href as Route} className={CTA_CLASSES}>
          {cta.label}
          <span className={ARROW_CLASSES} aria-hidden="true">
            →
          </span>
        </Link>
      )}
    </article>
  );
}

export default ContactCard;
