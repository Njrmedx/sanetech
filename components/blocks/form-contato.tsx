/**
 * FormContato — form unificado /contato (5 campos: intent + 4 dados).
 *
 * Substitui FormDiagnostico + FormOrcamento na pagina /contato. Intent
 * dropdown ("Diagnóstico técnico" | "Orçamento") controla o título da
 * mensagem WhatsApp. Submit valida via Zod, gera mensagem key:value e
 * abre wa.me/<NUMBER>?text=<encoded>.
 *
 * Phase B6c (2026-05-13): consolidacao do duo Diagnostico+Orcamento
 * em form unico com seletor de intencao.
 */

"use client";

import { useState, useId } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormError,
  FormHelper,
  FormSuccess,
} from "@/components/ui/form-message";
import {
  formContatoSchema,
  type FormContatoInput,
  type ContatoIntent,
} from "@/lib/forms/schemas";
import {
  formatContatoMessage,
  whatsappUrl,
} from "@/lib/forms/whatsapp-formatter";
import { cn } from "@/lib/utils";

const INTENT_OPTIONS: ReadonlyArray<{ value: ContatoIntent; label: string }> = [
  { value: "diagnostico", label: "Diagnóstico técnico" },
  { value: "orcamento", label: "Orçamento" },
];

interface FormContatoProps {
  id?: string;
  className?: string;
  defaultIntent?: ContatoIntent;
}

export function FormContato({
  id = "form-contato",
  className,
  defaultIntent = "diagnostico",
}: FormContatoProps) {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  function handleSubmit(formData: FormData) {
    setErrors({});
    const data = {
      intent: formData.get("intent"),
      nome: String(formData.get("nome") ?? ""),
      telefone: String(formData.get("telefone") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      mensagem: String(formData.get("mensagem") ?? ""),
      lgpdAceite: formData.get("lgpdAceite") === "on",
      company_url: String(formData.get("company_url") ?? ""),
    };

    // Honeypot — silenciosamente "sucesso" para bot
    if (data.company_url) {
      setSuccess(true);
      return;
    }

    const parsed = formContatoSchema.safeParse(data);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    const message = formatContatoMessage(parsed.data as FormContatoInput);
    const url = whatsappUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSuccess(true);
  }

  if (success) {
    return (
      <div id={id} className={cn("max-w-[560px]", className)}>
        <FormSuccess title="WhatsApp aberto">
          Abrimos o WhatsApp com sua mensagem pronta. Confira e envie quando
          quiser. Se não abrir,{" "}
          <Link href={"/contato" as Route} className="underline">
            use os outros canais de contato
          </Link>
          .
        </FormSuccess>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(new FormData(e.currentTarget));
      }}
      noValidate
      className={cn(
        "bg-card border border-[var(--color-border)] rounded-[var(--radius-lg)]",
        "p-6 lg:p-8 max-w-[560px]",
        className
      )}
    >
      <Field
        label="Tipo de solicitação"
        name="intent"
        required
        errors={errors.intent}
      >
        <Select
          name="intent"
          defaultValue={defaultIntent}
          invalid={Boolean(errors.intent?.length)}
        >
          {INTENT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </Field>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Nome" name="nome" required errors={errors.nome}>
          <Input
            type="text"
            name="nome"
            autoComplete="name"
            invalid={Boolean(errors.nome?.length)}
          />
        </Field>
        <Field label="Telefone" name="telefone" required errors={errors.telefone}>
          <Input
            type="tel"
            name="telefone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(11) 99999-9999"
            invalid={Boolean(errors.telefone?.length)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Empresa" name="empresa" required errors={errors.empresa}>
          <Input
            type="text"
            name="empresa"
            autoComplete="organization"
            invalid={Boolean(errors.empresa?.length)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Mensagem"
          name="mensagem"
          required
          errors={errors.mensagem}
          helper="Conte brevemente o contexto. Detalhes técnicos avançamos via WhatsApp com nosso atendente."
        >
          <Textarea
            name="mensagem"
            rows={4}
            invalid={Boolean(errors.mensagem?.length)}
          />
        </Field>
      </div>

      {/* Honeypot — visually hidden, tabindex -1 */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor={`${id}-company_url`}>Não preencher</label>
        <input
          type="text"
          id={`${id}-company_url`}
          name="company_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* LGPD */}
      <div className="mt-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox name="lgpdAceite" className="mt-0.5" />
          <span className="text-[14px] leading-relaxed text-foreground select-none">
            Ao enviar, autorizo o tratamento dos meus dados pessoais (nome, telefone, empresa, mensagem) pela{" "}
            <span className="font-semibold">SANETECH CONTROLE E AUTOMAÇÃO LTDA.</span>{" "}
            (CNPJ 05.950.182/0001-85) para resposta ao meu pedido de contato (diagnóstico ou orçamento conforme intent selecionado), com base no Art. 7º, V e IX da{" "}
            <Link
              href={"/politica-de-privacidade" as Route}
              className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
            >
              Lei Geral de Proteção de Dados (LGPD)
            </Link>
            . A mensagem é encaminhada ao WhatsApp Business da Sanetech (operado pela Meta Platforms).{" "}
            <span className="text-[var(--color-danger)]" aria-hidden="true">
              *
            </span>
            <span className="visually-hidden">obrigatório</span>
          </span>
        </label>
        {errors.lgpdAceite?.length ? (
          <FormError>{errors.lgpdAceite[0]}</FormError>
        ) : null}
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="rounded-full px-7 gap-2"
        >
          Enviar para WhatsApp
        </Button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  required?: boolean;
  errors?: string[];
  helper?: string;
  children: React.ReactNode;
}

function Field({ label, name, required, errors, helper, children }: FieldProps) {
  const errorId = useId();
  const helperId = useId();
  const hasError = Boolean(errors && errors.length);
  return (
    <label htmlFor={name} className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-foreground">
        {label}
        {required && (
          <>
            <span className="ml-0.5 text-[var(--color-danger)]" aria-hidden="true">
              *
            </span>
            <span className="visually-hidden"> obrigatório</span>
          </>
        )}
      </span>
      <div
        aria-describedby={
          [hasError ? errorId : null, helper ? helperId : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
      >
        {children}
      </div>
      {helper && !hasError ? (
        <FormHelper id={helperId}>{helper}</FormHelper>
      ) : null}
      {hasError ? (
        <FormError id={errorId}>{errors![0]}</FormError>
      ) : null}
    </label>
  );
}

export default FormContato;
