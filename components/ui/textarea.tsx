/**
 * Textarea — multi-line input.
 *
 * Standard Hero v8: mesma styling do Input + min-height 120px + resize vertical.
 *
 * Spec: DESIGN.md §5.3.
 */

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Marca o textarea como invalido (border + ring danger). */
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        data-invalid={invalid ? "true" : undefined}
        className={cn(
          // Base
          "flex min-h-[120px] w-full rounded-[var(--radius-md)] border bg-background px-4 py-3",
          "text-[16px] leading-relaxed text-foreground",
          "placeholder:text-muted-foreground",
          "resize-y",
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
          // Invalid
          "data-[invalid=true]:border-[var(--color-danger)]",
          "data-[invalid=true]:focus-visible:shadow-[0_0_0_3px_rgba(181,48,42,0.32)]",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
