/**
 * Header — Server Component.
 *
 * Sticky top, bg-background/85 + backdrop-blur + border-bottom.
 * Layout: logo (esq) | nav center-right (hidden mobile) | CTA primario
 * (right, hidden mobile) | hamburger (mobile only).
 *
 * Spec: DESIGN.md §5.16.
 */

import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { HeaderMegaMenu } from "./header-mega-menu";
import { HeaderMobileDrawer } from "./header-mobile-drawer";
// Note: SERVICES_BY_CATEGORY consumido diretamente por HeaderMegaMenu e
// HeaderMobileDrawer (ambos Client Components) para evitar passar funcoes
// (LucideIcon) atraves do Server -> Client boundary.
import { cn } from "@/lib/utils";

const NAV_LINK_BASE = cn(
  "text-[15px] font-medium text-foreground/80",
  "no-underline [&]:no-underline",
  "transition-[color] duration-[120ms]",
  "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
  "motion-reduce:transition-none",
  "hover:text-foreground",
  "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
  "focus-visible:rounded-[var(--radius-sm)]",
  "py-2"
);

export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-header)]",
        "bg-background/85 backdrop-blur-md",
        "border-b border-[var(--color-border)]"
      )}
    >
      <div className="container-site flex h-16 lg:h-[72px] items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Sanetech — página inicial"
          className="flex items-center no-underline [&]:no-underline shrink-0"
        >
          <Image
            src="/logo-principal-transparent.png"
            alt="Sanetech"
            width={48}
            height={48}
            priority
            className="h-10 w-10 lg:h-12 lg:w-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Principal"
          className="hidden lg:flex items-center gap-8 relative"
        >
          <HeaderMegaMenu />
          <Link
            href={"/solucoes/laboratorios-clinicos-farmaceuticos" as Route}
            className={NAV_LINK_BASE}
          >
            Soluções
          </Link>
          <Link href={"/galeria" as Route} className={NAV_LINK_BASE}>
            Galeria
          </Link>
          <Link href={"/sobre" as Route} className={NAV_LINK_BASE}>
            Sobre
          </Link>
          <Link href={"/contato" as Route} className={NAV_LINK_BASE}>
            Contato
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block shrink-0">
          <Button
            asChild
            variant="primary"
            size="md"
            className="rounded-full px-5"
          >
            <Link href={"/contato#diagnostico" as Route}>
              Solicitar diagnóstico
            </Link>
          </Button>
        </div>

        {/* Mobile hamburger (drawer importa SERVICES_BY_CATEGORY direto — evita
         * passar funcoes (LucideIcon) do Server -> Client boundary) */}
        <HeaderMobileDrawer />
      </div>
    </header>
  );
}

export default Header;
