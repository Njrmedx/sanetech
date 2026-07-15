/**
 * Dialog — Radix UI Dialog (modal).
 *
 * Overlay: ink-900 alpha 0.55 + backdrop-blur 4px, fade 200ms.
 * Container: scale 0.96 -> 1 + opacity 0 -> 1, 240ms ease-out, transform-origin
 * center (Emil exception: modal nao aponta para trigger).
 * Exit 160ms (60% enter).
 *
 * Spec: DESIGN.md §5.10.
 */

"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-[var(--z-modal)] bg-[rgba(14,16,36,0.55)] backdrop-blur-[4px]",
      "data-[state=open]:animate-[dialog-overlay-in_200ms_cubic-bezier(0.23,1,0.32,1)]",
      "data-[state=closed]:animate-[dialog-overlay-out_160ms_cubic-bezier(0.23,1,0.32,1)]",
      "motion-reduce:animate-none",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /** sm = 560px, md = 720px (default sm). */
  size?: "sm" | "md";
}

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, size = "sm", ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        // Position centered
        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "z-[var(--z-modal)] w-[calc(100vw-2rem)]",
        size === "sm" && "max-w-[560px]",
        size === "md" && "max-w-[720px]",
        // Visual
        "bg-card text-card-foreground",
        "rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]",
        "p-8",
        // Animation (transform-origin center — Emil exception)
        "origin-center",
        "data-[state=open]:animate-[dialog-content-in_240ms_cubic-bezier(0.23,1,0.32,1)]",
        "data-[state=closed]:animate-[dialog-content-out_160ms_cubic-bezier(0.23,1,0.32,1)]",
        "motion-reduce:animate-none",
        // Focus
        "focus-visible:outline-none",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          "absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center",
          "rounded-[var(--radius-sm)] text-muted-foreground",
          "transition-[background-color,color] duration-[120ms]",
          "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          "motion-reduce:transition-none",
          "hover:bg-muted hover:text-foreground",
          "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
        )}
      >
        <X className="size-4" strokeWidth={2} aria-hidden="true" />
        <span className="visually-hidden">Fechar</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 text-left mb-4", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 mt-6 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-[20px] font-semibold leading-snug tracking-tight text-foreground",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-[15px] leading-relaxed text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
