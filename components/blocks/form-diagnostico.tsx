/**
 * FormDiagnostico — form curto (4 campos), pivot WhatsApp formatter (B2.3 + B6a.1).
 *
 * Submit valida via Zod client-side, gera mensagem key:value formatada e
 * abre wa.me/<NUMBER>?text=<encoded> em nova janela. Sem backend, sem cookies.
 *
 * Phase B6a.1: reduzido de 13 campos para 4 visiveis (nome, telefone, empresa,
 * mensagem) + LGPD checkbox + honeypot. Resto do contexto tratado pelo
 * atendente no WhatsApp.
 */

"use client";

import { useState, useId } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormError,
  FormHelper,
  FormSuccess,
} from "@/components/ui/form-message";
import {
  formDiagnosticoSchema,
  type FormDiagnosticoInput,
} from "@/lib/forms/schemas";
import {
  formatDiagnosticoMessage,
  whatsappUrl,
} from "@/lib/forms/whatsapp-formatter";
import { cn } from "@/lib/utils";

interface FormDiagnosticoProps {
  id?: string;
  className?: string;
}

export function FormDiagnostico({
  id = "diagnostico",
  className,
}: FormDiagnosticoProps) {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  function handleSubmit(formData: FormData) {
    setErrors({});
    const data = {
      nome: String(formData.get("nome") ?? ""),
      telefone: String(formData.get("telefone") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      descricao: String(formData.get("descricao") ?? ""),
      lgpdAceite: formData.get("lgpdAceite") === "on",
      company_url: String(formData.get("company_url") ?? ""),
    };

    // Honeypot — silenciosamente "sucesso" para bot, sem abrir wa.me
    if (data.company_url) {
      setSuccess(true);
      return;
    }

    const parsed = formDiagnosticoSchema.safeParse(data);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    const message = formatDiagnosticoMessage(
      parsed.data as FormDiagnosticoInput
    );
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
      <h3 className="text-2xl font-display font-semibold tracking-tight text-foreground">
        Solicitar diagnóstico
      </h3>
      <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">
        Quatro campos. Ao enviar, abrimos o WhatsApp com sua mensagem pronta —
        seguimos a conversa por lá com nosso atendente técnico.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
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
          name="descricao"
          required
          errors={errors.descricao}
          helper="Conte brevemente o contexto: setor, demanda regulatória, planta nova ou ETE existente. Detalhes técnicos avançamos via WhatsApp."
        >
          <Textarea
            name="descricao"
            rows={4}
            invalid={Boolean(errors.descricao?.length)}
          />
        </Field>
      </div>

      {/* Honeypot — visually hidden, tabindex -1, autoComplete off */}
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
            (CNPJ 05.950.182/0001-85) para resposta ao meu pedido de diagnóstico técnico, com base no Art. 7º, V e IX da{" "}
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

export default FormDiagnostico;
