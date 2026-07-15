/**
 * Input — text/email/tel/url/number/etc.
 *
 * Standard Hero v8: shadcn-API-compat tokens (border-border, bg-background,
 * ring-ring, text-foreground, placeholder:text-muted-foreground), focus ring
 * via shadow-focus-ring, motion-reduce respect, font-size 16px (evita zoom iOS).
 *
 * Spec: DESIGN.md §5.2.
 */

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Marca o input como invalido (border + ring danger). */
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={invalid || undefined}
        data-invalid={invalid ? "true" : undefined}
        className={cn(
          // Base
          "flex h-11 w-full rounded-[var(--radius-md)] border bg-background px-4 py-2",
          "text-[16px] leading-tight text-foreground",
          "placeholder:text-muted-foreground",
          // Border default + hover + focus
          "border-[var(--color-border)]",
          "transition-[border-color,box-shadow] duration-[120ms]",
          "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          "motion-reduce:transition-none",
          "hover:border-[var(--color-ink-300)]",
          // Focus
          "focus-visible:outline-none focus-visible:border-[var(--color-primary-700)]",
          "focus-visible:shadow-[var(--shadow-focus-ring)]",
          // Disabled
          "disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-70",
          // Invalid (data attr)
          "data-[invalid=true]:border-[var(--color-danger)]",
          "data-[invalid=true]:focus-visible:shadow-[0_0_0_3px_rgba(181,48,42,0.32)]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
