/**
 * Zod schemas + tipos para forms curtos.
 *
 * - Validacao client-side via safeParse.
 * - Honeypot field 'company_url' deve ficar VAZIO (max 0 chars) — bots
 *   tendem a preencher autocompletando.
 * - LGPD aceite eh literal(true) — desmarcado bloqueia submit.
 *
 * Phase B6c (2026-05-13): FormContato unificado (substitui FormOrcamento).
 * FormDiagnostico mantido para uso na Home (CTA section).
 */

import { z } from "zod";

const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
const onlyDigitsPhone = (v: string) => v.replace(/\D/g, "");

/* ===== Form Diagnostico (Home CTA) ===== */

export const formDiagnosticoSchema = z.object({
  nome: z.string().trim().min(3, "Nome muito curto").max(120),
  telefone: z
    .string()
    .trim()
    .refine(
      (v) => phoneRegex.test(v) && onlyDigitsPhone(v).length >= 10,
      "Telefone inválido (ex: 11 99999-9999)"
    ),
  empresa: z.string().trim().min(3, "Nome da empresa muito curto").max(180),
  descricao: z
    .string()
    .trim()
    .min(20, "Descreva com pelo menos 20 caracteres")
    .max(2000, "Descrição muito longa (máx 2000)"),
  lgpdAceite: z.literal(true, {
    message: "Você precisa aceitar para enviar",
  }),
  company_url: z
    .string()
    .max(0, "Spam detectado")
    .optional()
    .or(z.literal("")),
});

export type FormDiagnosticoInput = z.infer<typeof formDiagnosticoSchema>;

/* ===== Form Contato (unified — /contato page) ===== */

export const contatoIntentEnum = z.enum(["diagnostico", "orcamento"]);
export type ContatoIntent = z.infer<typeof contatoIntentEnum>;

export const formContatoSchema = z.object({
  intent: contatoIntentEnum,
  nome: z.string().trim().min(3, "Nome muito curto").max(120),
  telefone: z
    .string()
    .trim()
    .refine(
      (v) => phoneRegex.test(v) && onlyDigitsPhone(v).length >= 10,
      "Telefone inválido (ex: 11 99999-9999)"
    ),
  empresa: z.string().trim().min(3, "Nome da empresa muito curto").max(180),
  mensagem: z
    .string()
    .trim()
    .min(20, "Descreva com pelo menos 20 caracteres")
    .max(2000, "Mensagem muito longa (máx 2000)"),
  lgpdAceite: z.literal(true, {
    message: "Você precisa aceitar para enviar",
  }),
  company_url: z
    .string()
    .max(0, "Spam detectado")
    .optional()
    .or(z.literal("")),
});

export type FormContatoInput = z.infer<typeof formContatoSchema>;

/* ===== Result type compartilhado ===== */

export type FormSubmitResult =
  | { ok: true }
  | {
      ok: false;
      fieldErrors?: Record<string, string[]>;
      formError?: string;
    };
