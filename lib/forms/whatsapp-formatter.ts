/**
 * WhatsApp formatter — gera mensagem string formatada key:value para wa.me.
 *
 * Phase B2.3 pivot: forms NAO enviam e-mail. Submit chama formatter +
 * window.open(wa.me/<NUMBER>?text=encoded). Sem cookies, sem backend.
 *
 * Phase B6c (2026-05-13): formatContatoMessage adicionado para form unificado
 * (intent diagnostico|orcamento controla titulo da mensagem).
 *
 * Post-B7-D (2026-05-14): WhatsApp number hardcoded via BUSINESS_INFO
 * (single source of truth, sem env var indirection).
 */

import { BUSINESS_INFO } from "@/lib/seo/business-info";
import type {
  FormDiagnosticoInput,
  FormContatoInput,
} from "./schemas";

export function formatDiagnosticoMessage(d: FormDiagnosticoInput): string {
  return [
    "*Solicitação de Diagnóstico — Sanetech*",
    "",
    `*Nome:* ${d.nome}`,
    `*Telefone:* ${d.telefone}`,
    `*Empresa:* ${d.empresa}`,
    "",
    "*Mensagem:*",
    d.descricao,
  ].join("\n");
}

const CONTATO_TITLES: Record<string, string> = {
  diagnostico: "Solicitação de Diagnóstico — Sanetech",
  orcamento: "Solicitação de Orçamento — Sanetech",
};

export function formatContatoMessage(d: FormContatoInput): string {
  const title = CONTATO_TITLES[d.intent] ?? "Contato — Sanetech";
  return [
    `*${title}*`,
    "",
    `*Nome:* ${d.nome}`,
    `*Telefone:* ${d.telefone}`,
    `*Empresa:* ${d.empresa}`,
    "",
    "*Mensagem:*",
    d.mensagem,
  ].join("\n");
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
