// components/blocks/gallery-section.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GallerySectionData } from "@/content/galeria";
import { GalleryGrid } from "./gallery-grid";
import { cn } from "@/lib/utils";

interface GallerySectionProps {
  section: GallerySectionData;
}

export function GallerySection({ section }: GallerySectionProps) {
  return (
    <section
      aria-labelledby={`galeria-${section.id}-title`}
      className="container-site py-16 md:py-24 lg:py-32"
    >
      <header className="mb-8 md:mb-12 max-w-3xl">
        {/* Eyebrow link */}
        <Link
          href={section.serviceHref}
          className={cn(
            "inline-flex items-center gap-1.5",
            "text-[13px] font-medium uppercase tracking-[0.08em]",
            "text-[var(--color-primary-700)]",
            "no-underline [&]:no-underline",
            "transition-colors duration-150",
            "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            "hover:text-[var(--color-primary-700)]/80",
            "focus-visible:outline-none focus-visible:rounded-[var(--radius-sm)]",
            "focus-visible:ring-2 focus-visible:ring-[var(--color-primary-700)]",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "motion-reduce:transition-none",
          )}
        >
          <span className="text-foreground/40 mr-2">{section.number}</span>
          <span>{section.serviceLabel}</span>
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>

        {/* Title */}
        <h2
          id={`galeria-${section.id}-title`}
          className={cn(
            "mt-3 font-display",
            "text-3xl md:text-4xl lg:text-5xl",
            "font-medium tracking-tight text-balance",
          )}
        >
          {section.title}
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-base md:text-lg text-foreground/70 text-pretty">
          {section.subtitle}
        </p>
      </header>

      <GalleryGrid items={section.items} sectionId={section.id} />
    </section>
  );
}
