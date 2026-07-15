/**
 * Spinner — SVG circular, herda currentColor.
 *
 * Animation rotate 720ms linear infinite (Emil principio: faster = perceived
 * faster). prefers-reduced-motion: 1500ms (NAO desabilitar — spinner sem
 * rotacao eh confuso).
 *
 * Spec: DESIGN.md §5.18.
 */

import type { SVGAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  /** 16, 20 ou 24px. Default 20. */
  size?: 16 | 20 | 24;
  /** Texto acessivel para o spinner. Default 'Carregando'. */
  label?: string;
}

export function Spinner({
  size = 20,
  label = "Carregando",
  className,
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-live="polite"
      className="inline-flex items-center"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "animate-spinner-rotate motion-reduce:animate-spinner-rotate-slow",
          className
        )}
        aria-hidden="true"
        {...props}
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeOpacity="0.18"
        />
        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="visually-hidden">{label}</span>
    </span>
  );
}

export default Spinner;
