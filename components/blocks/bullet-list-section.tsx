/**
 * BulletListSection — DRY block para "Quando aplicar" e "O que voce recebe".
 *
 * 2-col layout 5/7 com text (eyebrow + h2 + sub) e bulleted list com icon prefix.
 * Side controla orientacao:
 *   - "R" (default): text esquerda, lista direita
 *   - "L": lista esquerda, text direita (inverted)
 *
 * Phase B7-A (2026-05-13): suporte a Quando aplicar (side R, AlertCircle)
 * e O que voce recebe (side L, Check) em ServiceDetailPage.
 */

import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BulletListSectionProps {
  eyebrow: string;
  title: string;
  sub?: string;
  items: string[];
  icon: LucideIcon;
  /** "R" (default): text L / list R. "L": list L / text R (inverted). */
  side?: "L" | "R";
  /** Section background: "background" (default) ou "tinted" (primary-50). */
  bg?: "background" | "tinted";
  className?: string;
}

export function BulletListSection({
  eyebrow,
  title,
  sub,
  items,
  icon: Icon,
  side = "R",
  bg = "background",
  className,
}: BulletListSectionProps) {
  const bgClass =
    bg === "tinted"
      ? "bg-[var(--color-primary-50)]"
      : "bg-background";

  const textBlock = (
    <div>
      <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/70 max-w-[480px]">
          {sub}
        </p>
      )}
    </div>
  );

  const listBlock = (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Icon
            className="h-5 w-5 mt-1 shrink-0 text-[var(--color-primary-700)]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span className="text-[16px] leading-relaxed text-foreground/85">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className={cn("py-16 lg:py-20", bgClass, className)}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {side === "L" ? (
            <>
              <div className="lg:col-span-7 lg:order-1">{listBlock}</div>
              <div className="lg:col-span-5 lg:order-2">{textBlock}</div>
            </>
          ) : (
            <>
              <div className="lg:col-span-5">{textBlock}</div>
              <div className="lg:col-span-7">{listBlock}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default BulletListSection;
