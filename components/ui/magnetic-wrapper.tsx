/**
 * MagneticWrapper — wrapper que faz o filho seguir levemente o cursor em hover.
 *
 * Sensacao tatil premium B2B (Linear/Vercel-grade). Strength default 0.25
 * eh sutil — offset clamp em ±8px (x) / ±6px (y) impede exagero.
 *
 * Acessibilidade:
 *   - Respeita prefers-reduced-motion (matchMedia listener com cleanup)
 *   - Touch nem dispara mousemove, entao mobile nao eh afetado
 *
 * GPU-friendly: so muta translate3d, transition de 200ms ease.
 */

"use client";

import {
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
  type MouseEvent,
} from "react";
import { cn } from "@/lib/utils";

interface MagneticWrapperProps {
  children: ReactNode;
  /** Multiplier do offset (0-1). Default 0.25 = sutil. */
  strength?: number;
  className?: string;
}

/** Subscribe to a media query via useSyncExternalStore (React 19 canonical
 *  pattern — evita setState dentro de useEffect). SSR seguro. */
function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getServerReducedMotion() {
  return false;
}

export function MagneticWrapper({
  children,
  strength = 0.25,
  className,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion
  );

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setOffset({
      x: Math.max(-8, Math.min(8, x)),
      y: Math.max(-6, Math.min(6, y)),
    });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "inline-block transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
        "motion-reduce:transition-none",
        className
      )}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      {children}
    </div>
  );
}

export default MagneticWrapper;
