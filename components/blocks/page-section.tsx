/**
 * PageSection — wrapper utilitario para padronizar padding/container/bg.
 *
 * Standard Hero v8: bg variants alinhadas a brand (default tinted, wash,
 * ink, muted, dark, gradient). Container-site interno automatico.
 *
 * Spec: DESIGN.md §6.13.
 */

import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    bg: {
      default: "bg-background",
      wash: "bg-[var(--color-primary-50)]",
      ink: "bg-[var(--color-ink-50)]",
      muted: "bg-muted",
      dark: "bg-[var(--color-primary-900)] text-white",
      gradient: "bg-[var(--gradient-cycle)] text-white",
    },
    pad: {
      hero: "py-20 lg:py-32",
      default: "py-16 lg:py-20",
      compact: "py-12 lg:py-16",
      none: "",
    },
  },
  defaultVariants: { bg: "default", pad: "default" },
});

export interface PageSectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "header" | "footer" | "article";
  /** Se true, omite o wrapper container-site interno (ex: Hero usa container proprio). */
  bare?: boolean;
}

export function PageSection({
  as: Tag = "section",
  className,
  bg,
  pad,
  bare,
  children,
  ...props
}: PageSectionProps) {
  return (
    <Tag className={cn(sectionVariants({ bg, pad }), className)} {...props}>
      {bare ? children : <div className="container-site">{children}</div>}
    </Tag>
  );
}

export { sectionVariants };
export default PageSection;
