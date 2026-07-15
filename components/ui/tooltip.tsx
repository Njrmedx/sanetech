/**
 * Tooltip — Radix UI Tooltip.
 *
 * bg ink-900, white, 13px, padding 2/3, radius-sm, shadow-sm.
 * Animation: scale 0.95 -> 1 + opacity 0 -> 1, 125ms ease-out.
 * transform-origin: var(--radix-tooltip-content-transform-origin) — origin-aware.
 * Subsequent tooltips: skipDelayDuration via Provider (Emil principio).
 *
 * Spec: DESIGN.md §5.11.
 */

"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

/**
 * Provider — wrap o app (ou subtree). delayDuration default 400ms,
 * skipDelayDuration 200ms para subsequente (Emil: tooltip apos primeiro
 * abre instantaneo se mouse mover entre triggers proximos).
 */
const TooltipProvider = ({
  delayDuration = 400,
  skipDelayDuration = 200,
  ...props
}: ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>) => (
  <TooltipPrimitive.Provider
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
    {...props}
  />
);

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      // Visual
      "z-[var(--z-popover)]",
      "bg-[var(--color-ink-900)] text-white",
      "text-[13px] leading-snug font-medium",
      "px-3 py-2 rounded-[var(--radius-sm)] shadow-[var(--shadow-sm)]",
      "max-w-[280px]",
      // Origin-aware (Radix CSS var)
      "origin-[var(--radix-tooltip-content-transform-origin)]",
      // Animation
      "data-[state=delayed-open]:animate-[tooltip-in_125ms_cubic-bezier(0.23,1,0.32,1)]",
      "data-[state=instant-open]:animate-[tooltip-in_60ms_cubic-bezier(0.23,1,0.32,1)]",
      "data-[state=closed]:animate-[tooltip-out_75ms_cubic-bezier(0.23,1,0.32,1)]",
      "motion-reduce:animate-none",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
