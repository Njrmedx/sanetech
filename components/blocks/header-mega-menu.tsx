/**
 * HeaderMegaMenu — Radix NavigationMenu (Client), 3 colunas (Phase B2.3).
 */

"use client";

import Link from "next/link";
import type { Route } from "next";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SERVICES_BY_CATEGORY,
  type ServiceEntry,
} from "@/lib/content/services-list";

interface HeaderMegaMenuProps {
  categories?: typeof SERVICES_BY_CATEGORY;
}

export function HeaderMegaMenu({
  categories = SERVICES_BY_CATEGORY,
}: HeaderMegaMenuProps) {
  return (
    <NavigationMenuPrimitive.Root delayDuration={100} skipDelayDuration={300}>
      <NavigationMenuPrimitive.List className="flex items-center gap-1">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={cn(
              "group/megatrigger inline-flex items-center gap-1",
              "text-[15px] font-medium text-foreground/80",
              "transition-[color] duration-[120ms]",
              "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
              "motion-reduce:transition-none",
              "hover:text-foreground",
              "data-[state=open]:text-[var(--color-primary-700)]",
              "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
              "focus-visible:rounded-[var(--radius-sm)]",
              "py-2"
            )}
          >
            Serviços
            <ChevronDown
              className={cn(
                "size-4 shrink-0",
                "transition-transform duration-[180ms]",
                "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                "motion-reduce:transition-none",
                "group-data-[state=open]/megatrigger:rotate-180"
              )}
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={cn(
              "absolute left-0 top-full mt-2 w-[1100px] max-w-[95vw]",
              "data-[motion=from-start]:animate-[mega-in_180ms_cubic-bezier(0.23,1,0.32,1)]",
              "data-[motion=from-end]:animate-[mega-in_180ms_cubic-bezier(0.23,1,0.32,1)]",
              "data-[motion=to-start]:animate-[mega-out_140ms_cubic-bezier(0.23,1,0.32,1)]",
              "data-[motion=to-end]:animate-[mega-out_140ms_cubic-bezier(0.23,1,0.32,1)]",
              "motion-reduce:animate-none"
            )}
          >
            <div
              className={cn(
                "rounded-[var(--radius-lg)] bg-background",
                "border border-[var(--color-border)] shadow-[var(--shadow-lg)]",
                "p-6"
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                  <CategoryColumn
                    key={cat.id}
                    label={cat.label}
                    items={[...cat.items]}
                    indexHref={"indexHref" in cat ? cat.indexHref : null}
                  />
                ))}
              </div>
              {/* Footer link — catalog completo */}
              <NavigationMenuPrimitive.Link asChild>
                <Link
                  href={"/servicos" as Route}
                  className={cn(
                    "group/cataloglink mt-6 pt-5 border-t border-[var(--color-border)]",
                    "flex items-center justify-between gap-3",
                    "no-underline [&]:no-underline text-foreground",
                    "transition-[color] duration-[120ms]",
                    "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                    "motion-reduce:transition-none",
                    "hover:text-[var(--color-primary-700)]",
                    "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
                    "focus-visible:rounded-[var(--radius-sm)]"
                  )}
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[14px] font-semibold tracking-tight">
                      Ver catálogo completo
                    </span>
                    <span className="text-[12px] text-muted-foreground">
                      18 serviços organizados em 3 categorias
                    </span>
                  </span>
                  <ArrowRight
                    className={cn(
                      "size-4 shrink-0 text-[var(--color-primary-700)]",
                      "transition-transform duration-[180ms]",
                      "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                      "motion-reduce:transition-none",
                      "group-hover/cataloglink:translate-x-[3px]"
                    )}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
              </NavigationMenuPrimitive.Link>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>

      <div className="absolute top-full left-0 flex justify-start pointer-events-none">
        <NavigationMenuPrimitive.Viewport
          className={cn(
            "pointer-events-auto",
            "data-[state=open]:animate-[mega-in_180ms_cubic-bezier(0.23,1,0.32,1)]",
            "data-[state=closed]:animate-[mega-out_140ms_cubic-bezier(0.23,1,0.32,1)]",
            "motion-reduce:animate-none"
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
}

function CategoryColumn({
  label,
  items,
  indexHref,
}: {
  label: string;
  items: ServiceEntry[];
  /**
   * Optional shortcut to the category index page. Provided per-entry via
   * `SERVICES_BY_CATEGORY[i].indexHref` (single source of truth in
   * `lib/content/services-list.ts`).
   */
  indexHref: Route | null | undefined;
}) {
  return (
    <div>
      <h3 className="mb-3 text-[12px] font-medium tracking-[0.08em] text-[var(--color-primary-700)] uppercase">
        {label}
      </h3>
      {indexHref ? (
        <NavigationMenuPrimitive.Link asChild>
          <Link
            href={indexHref}
            className={cn(
              "group/catindex mb-2 inline-flex items-center gap-1",
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
        </NavigationMenuPrimitive.Link>
      ) : null}
      <ul className="flex flex-col gap-1" role="list">
        {items.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.id}>
              <NavigationMenuPrimitive.Link asChild>
                <Link
                  href={service.href}
                  className={cn(
                    "group/megacard flex flex-col gap-1 rounded-[var(--radius-md)] p-2.5",
                    "no-underline [&]:no-underline",
                    "transition-[background-color] duration-[120ms]",
                    "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                    "motion-reduce:transition-none",
                    "hover:bg-accent",
                    "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex h-6 w-6 items-center justify-center shrink-0",
                        "rounded-[var(--radius-sm)] bg-[var(--color-primary-50)]",
                        "text-[var(--color-primary-700)]",
                        "transition-[background-color] duration-[120ms]",
                        "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                        "motion-reduce:transition-none",
                        "group-hover/megacard:bg-[var(--color-primary-100)]"
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="size-3.5" strokeWidth={2} />
                    </span>
                    <span
                      className={cn(
                        "text-[13.5px] font-semibold tracking-tight text-foreground",
                        "transition-[color] duration-[120ms]",
                        "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
                        "motion-reduce:transition-none",
                        "group-hover/megacard:text-[var(--color-primary-700)]"
                      )}
                    >
                      {service.title}
                    </span>
                  </div>
                  <p className="text-[12px] leading-snug text-muted-foreground pl-8">
                    {service.shortDescription}
                  </p>
                </Link>
              </NavigationMenuPrimitive.Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
