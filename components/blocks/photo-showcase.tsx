"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Route } from "next";
import type { GalleryItem } from "@/content/galeria";
import { GalleryLightbox } from "./gallery-lightbox";
import { cn } from "@/lib/utils";

export interface PhotoShowcaseProps {
  /** 1-3 photos curadas do manifest content/galeria.ts. */
  items: readonly GalleryItem[];
  /** "solo" = 1 foto grande aspect 21/9 desktop. "row" = grid 2-3 cols. */
  variant: "solo" | "row";
  /** Eyebrow uppercase em var(--color-primary-700). Opcional. */
  eyebrow?: string;
  /** H2 da seção. Opcional. */
  title?: string;
  /** Subtitle 1 linha. Opcional. */
  subtitle?: string;
  /** Href do CTA cross-link. Default "/galeria". */
  ctaHref?: Route;
  /** Texto do CTA. Default "Ver galeria completa →". */
  ctaLabel?: string;
  /** Whether to render the CTA. Default true. */
  showCta?: boolean;
  /** Aria-label fallback quando não há eyebrow/title/subtitle. */
  ariaLabel?: string;
  className?: string;
}

export function PhotoShowcase({
  items,
  variant,
  eyebrow,
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  showCta = true,
  ariaLabel,
  className,
}: PhotoShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = title ? `showcase-${title.toLowerCase().replace(/\s+/g, "-")}-title` : undefined;
  const hasHeader = Boolean(eyebrow || title || subtitle);

  return (
    <section
      aria-labelledby={titleId}
      aria-label={!titleId ? ariaLabel : undefined}
      className={cn("container-site py-16 md:py-24", className)}
    >
      {hasHeader && (
        <header className="mb-8 md:mb-12 max-w-3xl">
          {eyebrow && (
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[var(--color-primary-700)]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              id={titleId}
              className={cn(
                "mt-3 font-display",
                "text-3xl md:text-4xl lg:text-5xl",
                "font-medium tracking-tight text-balance",
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-base md:text-lg text-foreground/70 text-pretty">
              {subtitle}
            </p>
          )}
        </header>
      )}

      {variant === "solo" ? (
        <SoloPhoto item={items[0]} onClick={() => setActiveIndex(0)} />
      ) : (
        <RowGrid items={items} onCellClick={setActiveIndex} />
      )}

      {showCta && (
        <div className="mt-8 md:mt-10">
          <Link
            href={(ctaHref ?? "/galeria") as Route}
            className={cn(
              "inline-flex items-center gap-1.5",
              "text-[15px] font-medium",
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
            <span>{ctaLabel ?? "Ver galeria completa"}</span>
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      )}

      <GalleryLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </section>
  );
}

interface SoloPhotoProps {
  item: GalleryItem;
  onClick: () => void;
}

function SoloPhoto({ item, onClick }: SoloPhotoProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-lg)]",
        "cursor-pointer w-full max-w-5xl mx-auto block",
        "aspect-[4/3] md:aspect-[21/9]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-700)]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:scale-[0.97] transition-transform duration-150",
        "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:transition-none",
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes="(max-width: 1280px) 100vw, 1024px"
        className={cn(
          "size-full object-cover",
          "transition-transform duration-[480ms]",
          "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:scale-[1.02]",
          "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
        )}
      />
      <CaptionOverlay caption={item.caption} />
    </motion.button>
  );
}

interface RowGridProps {
  items: readonly GalleryItem[];
  onCellClick: (index: number) => void;
}

function RowGrid({ items, onCellClick }: RowGridProps) {
  const cols =
    items.length === 1 ? "md:grid-cols-1"
    : items.length === 2 ? "md:grid-cols-2"
    : "md:grid-cols-3";
  return (
    <div className={cn("grid gap-3 md:gap-4 grid-cols-1", cols)}>
      {items.map((item, idx) => (
        <motion.button
          key={`${item.src}-${idx}`}
          type="button"
          onClick={() => onCellClick(idx)}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            delay: idx * 0.06,
            duration: 0.52,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "group relative overflow-hidden rounded-[var(--radius-lg)]",
            "cursor-pointer block aspect-[4/3]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-700)]",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "active:scale-[0.97] transition-transform duration-150",
            "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            "motion-reduce:transition-none",
          )}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes={
              items.length === 2
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className={cn(
              "size-full object-cover",
              "transition-transform duration-[480ms]",
              "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
              "group-hover:scale-[1.02]",
              "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            )}
          />
          <CaptionOverlay caption={item.caption} />
        </motion.button>
      ))}
    </div>
  );
}

interface CaptionOverlayProps {
  caption: string;
}

function CaptionOverlay({ caption }: CaptionOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 bottom-0",
        "p-4",
        "bg-gradient-to-t from-black/75 via-black/40 to-transparent",
        "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
        "transition-opacity duration-200",
        "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:transition-none motion-reduce:opacity-100",
      )}
    >
      <p className="text-sm text-white font-medium leading-tight text-left">
        {caption}
      </p>
    </div>
  );
}
