/**
 * Badge / Tag — pill semantic.
 *
 * Standard Hero v8: 5 variants semanticas, brand colors via DESIGN.md tokens
 * (semanticos sao Sanetech canonical, nao shadcn-compat).
 *
 * Spec: DESIGN.md §5.7.
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1",
    "rounded-[var(--radius-pill)] px-3 py-1",
    "text-[13px] font-medium leading-tight",
    "select-none whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        neutral:
          "bg-[var(--color-ink-100)] text-[var(--color-ink-700)]",
        primary:
          "bg-[var(--color-primary-100)] text-[var(--color-primary-900)]",
        success:
          "bg-[var(--color-success-bg)] text-[var(--color-success)]",
        warning:
          "bg-[var(--color-warning-bg)] text-[var(--color-warning)]",
        danger:
          "bg-[var(--color-danger-bg)] text-[var(--color-danger)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { badgeVariants };
export default Badge;
