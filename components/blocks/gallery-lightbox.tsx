// components/blocks/gallery-lightbox.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/content/galeria";
import { cn } from "@/lib/utils";

interface GalleryLightboxProps {
  items: readonly GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const isOpen = activeIndex !== null;
  const item = isOpen ? items[activeIndex] : null;

  // Keyboard nav: arrows
  useEffect(() => {
    if (!isOpen || activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && activeIndex < items.length - 1) {
        onIndexChange(activeIndex + 1);
      } else if (e.key === "ArrowLeft" && activeIndex > 0) {
        onIndexChange(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, activeIndex, items.length, onIndexChange]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-[var(--z-modal)] bg-black/90",
            "data-[state=open]:animate-[dialog-overlay-in_200ms_cubic-bezier(0.23,1,0.32,1)]",
            "data-[state=closed]:animate-[dialog-overlay-out_160ms_cubic-bezier(0.23,1,0.32,1)]",
            "motion-reduce:animate-none",
          )}
        />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            "fixed inset-0 z-[var(--z-modal)] flex flex-col items-center justify-center",
            "p-4 sm:p-8",
            "origin-center",
            "data-[state=open]:animate-[dialog-content-in_240ms_cubic-bezier(0.23,1,0.32,1)]",
            "data-[state=closed]:animate-[dialog-content-out_160ms_cubic-bezier(0.23,1,0.32,1)]",
            "motion-reduce:animate-none",
          )}
        >
          {item && (
            <>
              <Dialog.Title className="sr-only">
                Visualização da foto {(activeIndex ?? 0) + 1} de {items.length}
              </Dialog.Title>

              {/* Image */}
              <div className="relative flex-1 w-full max-w-7xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption */}
              <div
                aria-live="polite"
                className="mt-4 max-w-3xl text-center text-sm text-white/90 font-medium"
              >
                {item.caption}
                <span className="ml-3 text-white/50">
                  {(activeIndex ?? 0) + 1} / {items.length}
                </span>
              </div>

              {/* Close */}
              <Dialog.Close
                className={cn(
                  "absolute top-4 right-4 size-10 rounded-full",
                  "bg-white/10 hover:bg-white/20 active:scale-[0.97]",
                  "flex items-center justify-center text-white",
                  "transition-[background-color,transform] duration-150",
                  "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  "motion-reduce:transition-none",
                )}
                aria-label="Fechar visualização"
              >
                <X className="size-5" aria-hidden />
              </Dialog.Close>

              {/* Prev */}
              {activeIndex !== null && activeIndex > 0 && (
                <button
                  type="button"
                  onClick={() => onIndexChange(activeIndex - 1)}
                  className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full",
                    "bg-white/10 hover:bg-white/20 active:scale-[0.97]",
                    "flex items-center justify-center text-white",
                    "transition-[background-color,transform] duration-150",
                    "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    "motion-reduce:transition-none",
                  )}
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="size-6" aria-hidden />
                </button>
              )}

              {/* Next */}
              {activeIndex !== null && activeIndex < items.length - 1 && (
                <button
                  type="button"
                  onClick={() => onIndexChange(activeIndex + 1)}
                  className={cn(
                    "absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full",
                    "bg-white/10 hover:bg-white/20 active:scale-[0.97]",
                    "flex items-center justify-center text-white",
                    "transition-[background-color,transform] duration-150",
                    "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    "motion-reduce:transition-none",
                  )}
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="size-6" aria-hidden />
                </button>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
