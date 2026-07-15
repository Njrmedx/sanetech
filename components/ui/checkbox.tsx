/**
 * Checkbox — Radix UI Checkbox.
 *
 * Standard Hero v8: tokens shadcn-compat, motion-reduce respect, focus ring,
 * indicator anima de scale 0.9 -> 1 + opacity 0 -> 1 (NUNCA scale 0).
 *
 * Spec: DESIGN.md §5.5.
 */

"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      // Base 18x18
      "peer inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center",
      "rounded-[var(--radius-sm)] border bg-background",
      "border-[var(--color-border)]",
      "transition-[background-color,border-color,box-shadow] duration-[120ms]",
      "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
      "motion-reduce:transition-none",
      // Hover (gated por hover:hover via Tailwind v4 default)
      "hover:border-[var(--color-ink-300)]",
      // Focus
      "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
      // Checked state (Radix data-state)
      "data-[state=checked]:bg-[var(--color-primary-700)]",
      "data-[state=checked]:border-[var(--color-primary-700)]",
      "data-[state=checked]:text-white",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current",
        // Indicator entrance animation (NUNCA scale(0))
        "data-[state=checked]:animate-[checkbox-in_120ms_cubic-bezier(0.23,1,0.32,1)]",
        "motion-reduce:animate-none"
      )}
    >
      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";

export default Checkbox;
