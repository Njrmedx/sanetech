/**
 * HeaderMobileDrawer — Radix Dialog full-screen drawer (Client).
 *
 * Phase B2.3: Accordion com 3 categorias (Servicos / Complexos / Tratamento Aguas).
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  SERVICES_BY_CATEGORY,
  type ServiceEntry,
} from "@/lib/content/services-list";

interface HeaderMobileDrawerProps {
  categories?: typeof SERVICES_BY_CATEGORY;
}

export function HeaderMobileDrawer({
  categories = SERVICES_BY_CATEGORY,
}: HeaderMobileDrawerProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          className={cn(
            "lg:hidden inline-flex items-center justify-center",
            "h-10 w-10 rounded-[var(--radius-md)]",
            "text-foreground",
            "transition-[background-color] duration-[120ms]",
            "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
            "motion-reduce:transition-none",
            "hover:bg-muted",
            "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
          )}
          aria-label="Abrir menu"
        >
          <Menu className="size-5" strokeWidth={2} aria-hidden="true" />
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-[var(--z-modal)]",
            "bg-[rgba(14,16,36,0.55)] backdrop-blur-[4px]",
            "data-[state=open]:animate-[dialog-overlay-in_200ms_cubic-bezier(0.23,1,0.32,1)]",
            "data-[state=closed]:animate-[dialog-overlay-out_160ms_cubic-bezier(0.23,1,0.32,1)]",
            "motion-reduce:animate-none"
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed right-0 top-0 z-[var(--z-modal)]",
            "h-[100dvh] w-full max-w-[420px]",
            "bg-background shadow-[var(--shadow-xl)]",
            "flex flex-col",
            "data-[state=open]:animate-[drawer-slide-in_240ms_cubic-bezier(0.32,0.72,0,1)]",
            "data-[state=closed]:animate-[drawer-slide-out_180ms_cubic-bezier(0.32,0.72,0,1)]",
            "motion-reduce:animate-none",
            "focus-visible:outline-none"
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-[var(--color-border)] shrink-0">
            <DialogPrimitive.Title className="text-[15px] font-semibold tracking-tight text-foreground">
              Menu
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center",
                "rounded-[var(--radius-sm)] text-muted-foreground",
                "transition-[background-color,color] duration-[120ms]",
                "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                "motion-reduce:transition-none",
                "hover:bg-muted hover:text-foreground",
                "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
              )}
              aria-label="Fechar menu"
            >
              <X className="size-4" strokeWidth={2} aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <nav
            aria-label="Navegação principal mobile"
            className="flex-1 overflow-y-auto px-5 py-4"
          >
            <Accordion type="single" collapsible>
              {categories.map((cat) => {
                const indexHref = "indexHref" in cat ? cat.indexHref : null;
                return (
                <AccordionItem key={cat.id} value={cat.id}>
                  <AccordionTrigger className="!py-4 text-[16px]">
                    {cat.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    {indexHref ? (
                      <Link
                        href={indexHref}
                        onClick={close}
                        className={cn(
                          "mb-1 inline-flex items-center gap-1 py-1",
                          "text-[12px] uppercase tracking-[0.12em] font-medium",
                          "text-[var(--color-primary-700)]",
                          "no-underline [&]:no-underline",
                          "transition-[color] duration-[120ms]",
                          "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                          "motion-reduce:transition-none",
                          "hover:underline",
                          "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                          "focus-visible:rounded-[var(--radius-sm)]"
                        )}
                      >
                        Ver categoria completa
                        <span aria-hidden>→</span>
                      </Link>
                    ) : null}
                    <ul className="flex flex-col gap-1 -mt-2" role="list">
                      {cat.items.map((service: ServiceEntry) => (
                        <li key={service.id}>
                          <Link
                            href={service.href}
                            onClick={close}
                            className={cn(
                              "block rounded-[var(--radius-sm)] py-2 px-3 -mx-3",
                              "text-[15px] text-foreground/80 no-underline [&]:no-underline",
                              "transition-[background-color,color] duration-[120ms]",
                              "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                              "motion-reduce:transition-none",
                              "hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                );
              })}
            </Accordion>

            {/* Catálogo completo — featured link bridging categorias to páginas */}
            <Link
              href={"/servicos" as Route}
              onClick={close}
              className={cn(
                "flex items-center justify-between gap-3 mt-3 py-4",
                "border-y border-[var(--color-ink-100)]",
                "no-underline [&]:no-underline",
                "transition-[color] duration-[120ms]",
                "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                "motion-reduce:transition-none",
                "hover:text-[var(--color-primary-700)]"
              )}
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold tracking-tight text-foreground">
                  Catálogo completo
                </span>
                <span className="text-[12px] text-muted-foreground">
                  18 serviços em 3 categorias
                </span>
              </span>
              <ArrowRight
                className="size-4 shrink-0 text-[var(--color-primary-700)]"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            <ul className="flex flex-col mt-2" role="list">
              <li>
                <Link
                  href={"/solucoes/laboratorios-clinicos-farmaceuticos" as Route}
                  onClick={close}
                  className={cn(
                    "block py-4 text-[16px] font-semibold tracking-tight text-foreground",
                    "no-underline [&]:no-underline",
                    "border-b border-[var(--color-ink-100)]",
                    "transition-[color] duration-[120ms]",
                    "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                    "motion-reduce:transition-none",
                    "hover:text-[var(--color-primary-700)]"
                  )}
                >
                  Soluções
                </Link>
              </li>
              <li>
                <Link
                  href={"/galeria" as Route}
                  onClick={close}
                  className={cn(
                    "block py-4 text-[16px] font-semibold tracking-tight text-foreground",
                    "no-underline [&]:no-underline",
                    "border-b border-[var(--color-ink-100)]",
                    "transition-[color] duration-[120ms]",
                    "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                    "motion-reduce:transition-none",
                    "hover:text-[var(--color-primary-700)]"
                  )}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href={"/sobre" as Route}
                  onClick={close}
                  className={cn(
                    "block py-4 text-[16px] font-semibold tracking-tight text-foreground",
                    "no-underline [&]:no-underline",
                    "border-b border-[var(--color-ink-100)]",
                    "transition-[color] duration-[120ms]",
                    "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                    "motion-reduce:transition-none",
                    "hover:text-[var(--color-primary-700)]"
                  )}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href={"/contato" as Route}
                  onClick={close}
                  className={cn(
                    "block py-4 text-[16px] font-semibold tracking-tight text-foreground",
                    "no-underline [&]:no-underline",
                    "transition-[color] duration-[120ms]",
                    "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                    "motion-reduce:transition-none",
                    "hover:text-[var(--color-primary-700)]"
                  )}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <div className="px-5 py-4 border-t border-[var(--color-border)] shrink-0">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full rounded-full"
              onClick={close}
            >
              <Link href={"/contato#diagnostico" as Route}>
                Solicitar diagnóstico
              </Link>
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
