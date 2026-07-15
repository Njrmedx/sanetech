// components/blocks/gallery-hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryHeroProps {
  className?: string;
}

const HEADLINE_WORDS = ["Operações", "Sanetech,", "em", "campo."];

export function GalleryHero({ className }: GalleryHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="galeria-hero-title"
      className={cn(
        "container-site",
        "min-h-[50svh] flex flex-col justify-end",
        "pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16",
        className,
      )}
    >
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <p
          className={cn(
            "text-[13px] font-medium uppercase tracking-[0.08em]",
            "text-[var(--color-primary-700)]",
            "transition-[opacity,transform] duration-[520ms]",
            "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2",
            "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
          )}
        >
          Galeria
        </p>

        {/* H1 word-stagger */}
        <h1
          id="galeria-hero-title"
          className={cn(
            "mt-3 font-display",
            "text-4xl md:text-5xl lg:text-6xl",
            "font-medium tracking-tight text-balance",
            "leading-[1.05]",
          )}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span
              key={i}
              className={cn(
                "inline-block",
                "transition-[opacity,transform] duration-[640ms]",
                "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
                "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
              )}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {word}
              {i < HEADLINE_WORDS.length - 1 && " "}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p
          className={cn(
            "mt-5 text-lg md:text-xl text-foreground/70 text-pretty",
            "transition-[opacity,transform] duration-[520ms]",
            "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2",
            "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
          )}
          style={{ transitionDelay: "240ms" }}
        >
          Registro visual de produção de água tipo 1, estudos de tratabilidade
          e operação de Estações de Tratamento de Despejos Industriais.
        </p>
      </div>
    </section>
  );
}
