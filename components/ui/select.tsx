/**
 * Select — native HTML select (acessivel zero-JS).
 *
 * Standard Hero v8: mesma styling do Input + appearance-none + chevron Lucide
 * sobreposto a direita via background-image SVG (mantem zero-JS, sem wrapper
 * absoluto que quebra forms HTML naturais).
 *
 * Spec: DESIGN.md §5.4 (MVP Wave 1 usa native; Radix Select fica para Phase B+).
 */

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Marca o select como invalido (border + ring danger). */
  invalid?: boolean;
}

// SVG inline para chevron (evita dependencia de img path absoluto).
// stroke=currentColor (#6E739A = ink-500), 16x16 viewbox.
const CHEVRON_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236E739A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        data-invalid={invalid ? "true" : undefined}
        className={cn(
          // Base — mesmo do Input + appearance-none + padding-right p/ chevron
          "flex h-11 w-full rounded-[var(--radius-md)] border bg-background pl-4 pr-10 py-2",
          "text-[16px] leading-tight text-foreground",
          "appearance-none bg-no-repeat bg-[right_0.75rem_center]",
          // Border default + hover + focus
          "border-[var(--color-border)]",
          "transition-[border-color,box-shadow] duration-[120ms]",
          "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          "motion-reduce:transition-none",
          "hover:border-[var(--color-ink-300)]",
          "cursor-pointer",
          // Focus
          "focus-visible:outline-none focus-visible:border-[var(--color-primary-700)]",
          "focus-visible:shadow-[var(--shadow-focus-ring)]",
          // Disabled
          "disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-70",
          // Invalid
          "data-[invalid=true]:border-[var(--color-danger)]",
          "data-[invalid=true]:focus-visible:shadow-[0_0_0_3px_rgba(181,48,42,0.32)]",
          className
        )}
        style={{ backgroundImage: CHEVRON_BG }}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export default Select;
