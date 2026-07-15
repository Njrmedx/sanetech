/**
 * Card — refactored para Hero v8 standard com 4 variants.
 *
 * Anatomia: container radius-lg + padding configuravel. Variants cobrem
 * casos do projeto: flat (default), wash (calmo), elevated (interativo
 * com hover), dark (CTA section futuro).
 *
 * Hover apenas em elevated: 180ms transition border + shadow. NUNCA
 * translate-y/scale (overplay anti-pattern §2.7 DESIGN.md).
 *
 * Mantem subcomponentes (Header/Title/Description/Content/Footer/Action)
 * compatíveis com a API shadcn original (data-slot) para que blocks
 * shadcnblocks Pro plugem direto.
 *
 * Spec: DESIGN.md §5.6.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "group/card flex flex-col rounded-[var(--radius-lg)] overflow-hidden",
    "text-foreground",
    "*:[img:first-child]:rounded-t-[var(--radius-lg)]",
    "*:[img:last-child]:rounded-b-[var(--radius-lg)]",
  ],
  {
    variants: {
      variant: {
        flat:
          "bg-card border border-[var(--color-border)]",
        wash:
          "bg-[var(--color-primary-50)] border-0",
        elevated: cn(
          "bg-card border border-[var(--color-ink-100)] shadow-[var(--shadow-xs)]",
          "transition-[box-shadow,border-color] duration-[180ms]",
          "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          "motion-reduce:transition-none",
          "hover:border-[var(--color-ink-300)] hover:shadow-[var(--shadow-sm)]"
        ),
        dark:
          "bg-[var(--color-primary-900)] text-white border-0",
      },
      pad: {
        none: "gap-0",
        sm: "gap-3 p-6",
        md: "gap-4 p-8",
      },
    },
    defaultVariants: {
      variant: "flat",
      pad: "md",
    },
  }
);

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, pad, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-variant={variant ?? "flat"}
      className={cn(cardVariants({ variant, pad }), className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-[18px] leading-snug font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-[15px] leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("text-[15px] leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center pt-4 mt-2 border-t border-[var(--color-ink-100)]",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
};
