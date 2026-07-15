// components/blocks/gallery-grid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/content/galeria";
import { GalleryLightbox } from "./gallery-lightbox";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  items: readonly GalleryItem[];
  sectionId: string;
}

export function GalleryGrid({ items, sectionId }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid gap-3 md:gap-4",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {items.map((item, idx) => (
          <GridCell
            key={`${sectionId}-${idx}`}
            item={item}
            index={idx}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
      <GalleryLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onIndexChange={setActiveIndex}
      />
    </>
  );
}

interface GridCellProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

function GridCell({ item, index, onClick }: GridCellProps) {
  const span = item.span ?? 1;
  const spanClass =
    span === 3
      ? "lg:col-span-3 md:col-span-2"
      : span === 2
        ? "lg:col-span-2 md:col-span-2"
        : "lg:col-span-1 md:col-span-1";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: index * 0.04,
        duration: 0.52,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-lg)]",
        "cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-700)]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:scale-[0.97] transition-transform duration-150",
        "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:transition-none",
        spanClass,
        item.featured ? "aspect-[16/10]" : "aspect-[4/3]",
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes={
          span === 3
            ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            : span === 2
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        priority={item.featured}
        className={cn(
          "size-full object-cover",
          "transition-transform duration-[480ms]",
          "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:scale-[1.02]",
          "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
        )}
      />

      {/* Caption overlay — hover/focus visible */}
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
          {item.caption}
        </p>
      </div>
    </motion.button>
  );
}
