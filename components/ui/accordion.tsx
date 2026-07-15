/**
 * Accordion — Radix UI Accordion (FAQ).
 *
 * ChevronDown rotaciona 180deg quando aberto. Animacao height via Radix CSS
 * vars (--radix-accordion-content-height). Enter 240ms, exit 180ms (60%).
 * Keyframes adicionados em globals.css.
 *
 * Spec: DESIGN.md §5.9.
 */

"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-[var(--color-ink-100)]", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group/accordion-trigger flex flex-1 items-center justify-between gap-4",
        "py-5 text-left",
        "text-[18px] font-semibold leading-snug tracking-tight text-foreground",
        "transition-[color] duration-[120ms]",
        "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
        "motion-reduce:transition-none",
        "hover:text-[var(--color-primary-700)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
        "focus-visible:rounded-[var(--radius-sm)]",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "size-4 shrink-0 text-[var(--color-ink-500)]",
          "transition-transform duration-[240ms]",
          "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          "motion-reduce:transition-none",
          "group-data-[state=open]/accordion-trigger:rotate-180",
          "group-data-[state=open]/accordion-trigger:text-[var(--color-primary-700)]"
        )}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden",
      "data-[state=open]:animate-[accordion-down_240ms_cubic-bezier(0.23,1,0.32,1)]",
      "data-[state=closed]:animate-[accordion-up_180ms_cubic-bezier(0.23,1,0.32,1)]",
      "motion-reduce:animate-none"
    )}
    {...props}
  >
    <div
      className={cn(
        "pb-5 pr-8 text-[15px] leading-relaxed text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
