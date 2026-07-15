/**
 * /contato page content — 4 ContactCard data via BUSINESS_INFO constants.
 *
 * Post-B7-D simplification (2026-05-14): removed env-var-with-PENDING-
 * fallback pattern. Dados públicos hardcoded via lib/seo/business-info.
 * Sem indirection env var, sem `[TBD]`/`PENDING` sentinels.
 */

import type { ContactCardProps } from "@/components/blocks/contact-card";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/seo/business-info";

export const CONTATO_CARDS: ContactCardProps[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Atendimento técnico direto pela equipe Sanetech.",
    cta: {
      label: "Abrir conversa",
      href: `https://wa.me/${BUSINESS_INFO.whatsappNumber}`,
    },
    external: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Para propostas comerciais e documentação técnica.",
    cta: {
      label: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
    },
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "Atendimento comercial em horário comercial.",
    cta: {
      label: BUSINESS_INFO.telephone,
      href: `tel:${BUSINESS_INFO.telephone.replace(/\D/g, "")}`,
    },
  },
  {
    icon: MapPin,
    title: "Endereço",
    description: BUSINESS_INFO.addressFormatted,
    cta: { label: "Falar com a equipe", href: "/contato#diagnostico" },
  },
];
