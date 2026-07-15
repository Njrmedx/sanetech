/**
 * WhatsAppFloater — fixed bottom-right CTA contextual.
 *
 * Mensagem muda por path (PRD §9.3). Hover scale 1.05 + shadow boost (180ms).
 * Mount fade-in delay 600ms (apos hero estabilizar). Tooltip desktop
 * "Falar conosco". WhatsApp number hardcoded via BUSINESS_INFO.
 *
 * Spec: DESIGN.md §6.9.
 * Post-B7-D (2026-05-14): hardcoded via BUSINESS_INFO (sem env var fallback).
 */

"use client";

import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import { cn } from "@/lib/utils";

const MESSAGES_BY_PATH: Record<string, string> = {
  "/": "Olá! Vim pelo site da Sanetech e gostaria de mais informações.",
  "/contato":
    "Olá! Vim pela página de contato e gostaria de falar com o time comercial.",
  "/servicos":
    "Olá! Tenho interesse nos serviços da Sanetech e gostaria de mais informações.",
  "/servicos/estudo-de-tratabilidade-de-efluentes":
    "Olá! Tenho interesse em um estudo de tratabilidade de efluente.",
  "/servicos/projeto-de-ete":
    "Olá! Preciso de informações sobre projeto de ETE.",
  "/servicos/modificacao-de-ete":
    "Olá! Preciso modificar/atualizar uma ETE existente.",
  "/servicos/manutencao-de-ete":
    "Olá! Preciso de manutenção em uma ETE.",
  "/servicos/operacao-de-ete":
    "Olá! Tenho interesse em operação de ETE.",
  "/servicos/consultoria-tecnica-ambiental":
    "Olá! Preciso de consultoria técnica ambiental.",
  "/servicos/automacao-de-processos":
    "Olá! Tenho interesse em automação de processos.",
  "/solucoes/laboratorios-clinicos-farmaceuticos":
    "Olá! Tenho interesse em soluções para laboratório (água tipo 1).",
};

const FALLBACK_MESSAGE =
  "Olá! Vim pelo site da Sanetech e gostaria de mais informações.";

function buildHref(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppFloater() {
  const pathname = usePathname() ?? "/";
  const message = MESSAGES_BY_PATH[pathname] ?? FALLBACK_MESSAGE;
  const href = buildHref(message);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar conosco no WhatsApp"
          className={cn(
            "fixed bottom-5 right-5 lg:bottom-6 lg:right-6 z-[var(--z-whatsapp)]",
            "inline-flex items-center justify-center",
            "h-[52px] w-[52px] lg:h-14 lg:w-14",
            "rounded-full bg-[#25D366] text-white",
            "shadow-[var(--shadow-lg)]",
            "no-underline [&]:no-underline",
            // Mount + hover transform
            "animate-[whatsapp-mount_280ms_cubic-bezier(0.16,1,0.3,1)_600ms_both]",
            "transition-[transform,box-shadow] duration-[180ms]",
            "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
            "motion-reduce:animate-none motion-reduce:transition-none",
            "hover:scale-[1.05] hover:shadow-[0_24px_48px_-12px_rgba(37,211,102,0.45)]",
            "active:scale-[0.95]",
            "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]"
          )}
        >
          {/* WhatsApp official SVG icon (24px white) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="currentColor"
            aria-hidden="true"
            className="pointer-events-none"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" sideOffset={12}>
        Falar conosco
      </TooltipContent>
    </Tooltip>
  );
}

export default WhatsAppFloater;
