/**
 * FormMessage — 3 componentes em 1 arquivo: Helper, Error, Success.
 *
 * Helper: text-13 muted, mt-1.5.
 * Error: role=alert, AlertCircle 14px, danger color.
 * Success: role=status aria-live=polite, bg success-bg, CheckCircle2,
 *          padding generoso + radius-md.
 *
 * Spec: DESIGN.md §5.15.
 */

import type { HTMLAttributes } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FormHelperProps extends HTMLAttributes<HTMLParagraphElement> {}

export function FormHelper({ className, children, ...props }: FormHelperProps) {
  return (
    <p
      className={cn(
        "mt-1.5 text-[13px] leading-snug text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export interface FormErrorProps extends HTMLAttributes<HTMLParagraphElement> {}

export function FormError({ className, children, ...props }: FormErrorProps) {
  return (
    <p
      role="alert"
      className={cn(
        "mt-1.5 flex items-start gap-1.5 text-[13px] leading-snug",
        "text-[var(--color-danger)]",
        className
      )}
      {...props}
    >
      <AlertCircle
        className="size-3.5 shrink-0 mt-0.5"
        strokeWidth={2.25}
        aria-hidden="true"
      />
      <span>{children}</span>
    </p>
  );
}

export interface FormSuccessProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function FormSuccess({
  className,
  title,
  children,
  ...props
}: FormSuccessProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3 px-6 py-4 rounded-[var(--radius-md)]",
        "bg-[var(--color-success-bg)] text-[var(--color-success)]",
        "border border-[color:rgb(31_138_82_/_0.18)]",
        className
      )}
      {...props}
    >
      <CheckCircle2
        className="size-5 shrink-0 mt-0.5"
        strokeWidth={2.25}
        aria-hidden="true"
      />
      <div className="flex-1 text-[14px] leading-relaxed">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        {children}
      </div>
    </div>
  );
}
