/**
 * Tabs — Radix UI Tabs com underline ativo (minimalismo tecnico).
 *
 * NAO pill, NAO fill — apenas border-bottom 2px no trigger ativo.
 * Color transition 120ms ease-out.
 *
 * Spec: DESIGN.md §5.8.
 */

"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1 border-b border-[var(--color-ink-100)]",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // Base
      "inline-flex items-center justify-center whitespace-nowrap",
      "px-4 py-3 text-[15px] font-medium",
      "border-b-2 border-transparent -mb-px",
      "text-muted-foreground",
      // Motion
      "transition-[color,border-color] duration-[120ms]",
      "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
      "motion-reduce:transition-none",
      // Hover (gated)
      "hover:text-foreground",
      // Focus
      "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
      "focus-visible:rounded-[var(--radius-sm)]",
      // Active state (Radix data-state)
      "data-[state=active]:text-[var(--color-primary-700)]",
      "data-[state=active]:border-[var(--color-primary-700)]",
      // Disabled
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-6 focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
      "focus-visible:rounded-[var(--radius-md)]",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
