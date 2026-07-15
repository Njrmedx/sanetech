/**
 * Hero — full-bleed image with text overlay + motion premium pass.
 *
 * Aesthetic lane: Linear/Vercel B2B technical credibility +
 * documentary-industrial photography full-bleed + committed Sanetech indigo.
 *
 * Motion premium (4 efeitos + 1 fix tipografico):
 *   1. Ken Burns slow zoom (32s) na imagem de fundo (.ken-burns wrapper)
 *   2. Word stagger no H1 (640ms duration, 40ms entre palavras)
 *   3. MagneticWrapper nos CTAs (pull leve do cursor, max +-8px / +-6px)
 *   4. ScrollHint chevron + label "scroll", fade out apos primeiro scroll
 *   5. text-wrap: pretty global em <p> (fix orphans/widows)
 *
 * Entrance choreography (apos inView via IntersectionObserver, threshold 0.3):
 *   - 0ms eyebrow
 *   - 0..240ms H1 word stagger (6 palavras × 40ms + "laboratorio" + ".")
 *   - 80ms+stagger sub paragraph
 *   - 200ms+stagger CTAs
 *   - 480ms+stagger AnimatedUnderline draws
 *
 * Acessibilidade: prefers-reduced-motion respeitado em TODAS animations
 * (motion-reduce: variants nos transitions, .ken-burns/.animate-scroll-bounce
 * com animation:none via @media query). MagneticWrapper detecta matchMedia
 * em runtime e desliga o tracking de mouse.
 *
 * Anti-claim: nada de fabricacao/marca propria/patente.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 6 palavras antes de "laboratorio"; underline e ponto vem depois.
  const headingWords = ["Tratamento", "de", "efluentes", "que", "começa", "em"];
  const STAGGER_MS = 40;
  const headingTotal = headingWords.length; // 6 palavras
  // sub/cta delays absorvem o stagger total para nao parecer engatado
  const subDelay = 80 + headingTotal * STAGGER_MS; // 320ms
  const ctaDelay = 200 + headingTotal * STAGGER_MS; // 440ms

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full overflow-hidden",
        "h-[clamp(640px,88vh,920px)]",
        className
      )}
    >
      {/* Full-bleed background com 2 layers de motion:
       * - .hero-parallax-bg: scroll-driven translateY 15% (CSS scroll-driven)
       * - .ken-burns: time-driven scale loop 32s
       * Layers independentes — coexistem sem conflito. */}
      <div className="absolute inset-0 hero-parallax-bg">
        <div className="absolute inset-0 ken-burns">
          <Image
            src="/images/hero/hero-1-tratabilidade.jpg"
            alt="Estudo de tratabilidade de efluente em bancada laboratorial Sanetech"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Overlay diagonal — escurece so onde o texto vai (bottom-left) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(14,16,36,0.78) 0%, rgba(14,16,36,0.55) 30%, rgba(14,16,36,0.18) 55%, rgba(14,16,36,0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* Gradient breath ambient — glow cyan sutil pulsando atras do texto.
       * Cor brand-300 (logo), alpha baixo, blend screen. Cinematic ambient. */}
      <div
        className="absolute inset-0 pointer-events-none animate-gradient-breath"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 22% 80%, rgba(91,168,217,0.18), transparent 60%)",
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />

      {/* Text overlay container — bottom-left.
       * .hero-parallax-text: scroll-driven translateY -8% + opacity 0.4 */}
      <div className="container-site relative h-full flex items-end pb-16 lg:pb-24 hero-parallax-text">
        <div className="max-w-[760px]">
          <p
            className={cn(
              "text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-5",
              "transition-[opacity,transform] duration-[480ms]",
              "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none",
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0"
            )}
          >
            Sanetech — Engenharia para tratamento de efluentes
          </p>

          <h1
            className={cn(
              "text-[clamp(3rem,6vw+1rem,6.5rem)] leading-[0.95] font-display font-bold tracking-[-0.03em] text-white text-balance",
              "[text-shadow:0_2px_24px_rgba(0,0,0,0.25)]"
            )}
          >
            <StaggeredWords words={headingWords} play={inView} staggerMs={STAGGER_MS} />{" "}
            <span
              className={cn(
                "relative inline-block whitespace-nowrap transition-[opacity,transform] duration-[640ms]",
                "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                "motion-reduce:transition-none motion-reduce:transform-none",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0"
              )}
              style={{
                transitionDelay: inView ? `${headingTotal * STAGGER_MS}ms` : "0ms",
              }}
            >
              laboratório
              <AnimatedUnderline play={inView} />
            </span>
            <span
              className={cn(
                "inline-block transition-[opacity,transform] duration-[640ms]",
                "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                "motion-reduce:transition-none motion-reduce:transform-none",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0"
              )}
              style={{
                transitionDelay: inView ? `${(headingTotal + 1) * STAGGER_MS}ms` : "0ms",
              }}
            >
              .
            </span>
          </h1>

          <p
            className={cn(
              "mt-6 max-w-xl text-[clamp(1.0625rem,0.4vw+1rem,1.25rem)] leading-[1.55] text-white/85",
              "transition-[opacity,transform] duration-[480ms]",
              "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:[transition-delay:0ms]",
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0"
            )}
            style={{ transitionDelay: inView ? `${subDelay}ms` : "0ms" }}
          >
            Antes de propor sua estação de tratamento, testamos seu efluente real em bancada e dimensionamos a rota mais eficiente para atender aos padrões de lançamento.
          </p>

          <div
            className={cn(
              "mt-10 flex flex-wrap gap-3 transition-[opacity,transform] duration-[320ms]",
              "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:[transition-delay:0ms]",
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0"
            )}
            style={{ transitionDelay: inView ? `${ctaDelay}ms` : "0ms" }}
          >
            <MagneticWrapper>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="rounded-full px-7 gap-2 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.35)]"
              >
                <Link href={"/contato#diagnostico" as Route}>
                  Solicitar diagnóstico
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </MagneticWrapper>
            <MagneticWrapper>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full px-7 [&]:!text-white border border-transparent hover:border-white/30 hover:bg-white/5"
              >
                <Link href={"/servicos" as Route}>
                  <span className="relative inline-block">
                    Ver serviços
                    <AnimatedUnderlineLoop />
                  </span>
                </Link>
              </Button>
            </MagneticWrapper>
          </div>
        </div>
      </div>

      {/* Scroll hint: chevron bouncing + label, fade apos primeiro scroll */}
      <ScrollHint />
    </section>
  );
};

/**
 * StaggeredWords — renderiza cada palavra como inline-block com transition
 * delay incremental. play=true dispara a entrada cascading.
 */
function StaggeredWords({
  words,
  play,
  staggerMs = 40,
  baseDelay = 0,
}: {
  words: string[];
  play: boolean;
  staggerMs?: number;
  baseDelay?: number;
}) {
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            "inline-block transition-[opacity,transform] duration-[640ms]",
            "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
            "motion-reduce:transition-none motion-reduce:transform-none",
            play
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0"
          )}
          style={{
            transitionDelay: play ? `${baseDelay + i * staggerMs}ms` : "0ms",
          }}
        >
          {word}
          {i < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}

/**
 * AnimatedUnderline — sublinhado SVG sober (substitui Cover/SparklesCore).
 *
 * Implementacao via @keyframes (.animate-draw-underline em globals.css)
 * em vez de transition. Razao: React batching engole transitions em
 * SVG attributes em prop change — o browser nao pinta o initial state
 * antes do final, entao o "draw" desaparece. Keyframe + forwards mantem
 * estado final estavel.
 *
 * Reduced-motion: animation:none + stroke-dashoffset:0 !important
 * forca underline visivel instantaneamente.
 */
function AnimatedUnderline({ play }: { play: boolean }) {
  return (
    <svg
      className="absolute left-0 right-0 -bottom-1 lg:-bottom-2 w-full h-[0.18em] overflow-visible pointer-events-none"
      viewBox="0 0 200 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 8 Q 50 2, 100 6 T 198 6"
        stroke="var(--color-primary-300)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="220"
        strokeDashoffset="220"
        className={cn(play && "animate-draw-underline")}
      />
    </svg>
  );
}

/**
 * AnimatedUnderlineLoop — variante em loop infinito (4s ciclo) para CTA
 * 'Ver servicos' como afordancia animada de link (B2.2 owner pedido).
 * stroke=currentColor (herda cor do botao). pointer-events-none.
 * Reduced-motion: animation:none + opacity 1 + stroke-dashoffset 0.
 */
function AnimatedUnderlineLoop() {
  return (
    <svg
      className="absolute left-0 right-0 -bottom-1 w-full h-[0.18em] overflow-visible pointer-events-none"
      viewBox="0 0 200 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 8 Q 50 2, 100 6 T 198 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="220"
        strokeDashoffset="220"
        className="animate-draw-underline-loop"
      />
    </svg>
  );
}

/**
 * ScrollHint — chevron + label "scroll" centralizado bottom. Fade apos
 * primeiro scroll (>80px). aria-hidden (decorativo).
 */
function ScrollHint() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 80) setVisible(false);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
        "transition-opacity duration-500 motion-reduce:transition-none",
        visible ? "opacity-70" : "opacity-0 pointer-events-none"
      )}
      aria-hidden="true"
    >
      <span className="text-[11px] uppercase tracking-[0.16em] text-white/60 font-medium">
        scroll
      </span>
      <ChevronDown
        className="size-4 text-white/70 animate-scroll-bounce motion-reduce:animate-none"
        strokeWidth={2}
      />
    </div>
  );
}

export { Hero as Hero242 };
export default Hero;
