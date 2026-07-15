/**
 * Design System Showcase — interno, noindex.
 *
 * Renderiza todos os UI primitives Phase B1 para validacao visual.
 * Rota nao-linkada (sem entry no header), accessible so por URL direta.
 */

"use client";

import { useState, type ReactNode } from "react";
import type { Route } from "next";

import { Button } from "@/components/ui/button";
// NOTA: TooltipProvider ja eh providenciado pelo SiteLayout (app/(site)/layout.tsx).
// Tooltip/TooltipTrigger/TooltipContent funcionam diretamente.
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Pagination } from "@/components/ui/pagination";
import {
  FormHelper,
  FormError,
  FormSuccess,
} from "@/components/ui/form-message";
import { Spinner } from "@/components/ui/spinner";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Mail, Settings, Trash2, Search } from "lucide-react";

const VARIANTS = [
  "primary",
  "primary-dark",
  "ghost",
  "danger",
  "default",
  "secondary",
  "outline",
  "destructive",
] as const;

const SIZES = ["sm", "md", "lg", "xl"] as const;

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background py-16 lg:py-24">
      <div className="container-site space-y-20">
          <header>
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-muted-foreground mb-3">
              Sanetech Web
            </p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-[-0.02em] text-foreground">
              Design System (interno)
            </h1>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl">
              Showcase de UI primitives Phase B1 para validação visual. Rota
              não-linkada, noindex. Todos os componentes seguem aesthetic
              baseline Hero v8.
            </p>
          </header>

          {/* 1. Button */}
          <SectionWrapper title="Button" description="8 variants × 4 sizes + states">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                  Variants × sizes
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {VARIANTS.map((variant) =>
                    SIZES.map((size) => (
                      <Button
                        key={`${variant}-${size}`}
                        variant={variant}
                        size={size}
                      >
                        {variant} / {size}
                      </Button>
                    ))
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                  States
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Default</Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                  <Button variant="primary">
                    <Spinner size={16} />
                    <span className="ml-2">Loading</span>
                  </Button>
                  <Button variant="primary" aria-label="Settings" size="md">
                    <Settings className="size-4" aria-hidden="true" />
                  </Button>
                  <Button variant="outline">
                    <Mail className="size-4" aria-hidden="true" />
                    <span>With icon</span>
                  </Button>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* 2. Input */}
          <SectionWrapper
            title="Input"
            description="States: default, hover, focus, invalid, disabled"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <Field label="Default">
                <Input type="text" placeholder="Digite algo..." />
              </Field>
              <Field label="Focus me (autofocus)">
                <Input type="text" placeholder="Em foco" autoFocus />
              </Field>
              <Field label="Email">
                <Input type="email" placeholder="voce@empresa.com.br" />
              </Field>
              <Field label="Tel">
                <Input type="tel" placeholder="(11) 99999-9999" />
              </Field>
              <Field label="Number">
                <Input type="number" placeholder="0" />
              </Field>
              <Field label="Invalid">
                <Input type="text" defaultValue="valor errado" invalid />
              </Field>
              <Field label="Disabled">
                <Input type="text" defaultValue="bloqueado" disabled />
              </Field>
            </div>
          </SectionWrapper>

          {/* 3. Textarea */}
          <SectionWrapper title="Textarea" description="Default + invalid + disabled">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              <Field label="Default">
                <Textarea placeholder="Digite uma mensagem..." />
              </Field>
              <Field label="Invalid">
                <Textarea defaultValue="Conteúdo inválido" invalid />
              </Field>
              <Field label="Disabled">
                <Textarea defaultValue="Bloqueado para edição" disabled />
              </Field>
            </div>
          </SectionWrapper>

          {/* 4. Select */}
          <SectionWrapper title="Select" description="Native HTML select com chevron">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              <Field label="Default">
                <Select defaultValue="">
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option value="quimico">Químico</option>
                  <option value="farmaceutico">Farmacêutico</option>
                  <option value="alimenticio">Alimentício</option>
                  <option value="metalmecanico">Metalmecânico</option>
                  <option value="textil">Têxtil</option>
                </Select>
              </Field>
              <Field label="Invalid">
                <Select defaultValue="" invalid>
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option value="a">Opção A</option>
                  <option value="b">Opção B</option>
                </Select>
              </Field>
              <Field label="Disabled">
                <Select defaultValue="a" disabled>
                  <option value="a">Bloqueado</option>
                </Select>
              </Field>
            </div>
          </SectionWrapper>

          {/* 5. Checkbox */}
          <SectionWrapper title="Checkbox" description="Radix Checkbox com indicator scale">
            <div className="flex flex-wrap gap-8">
              <CheckboxField label="Unchecked" />
              <CheckboxField label="Checked" defaultChecked />
              <CheckboxField label="Disabled" disabled />
              <CheckboxField label="Disabled checked" disabled defaultChecked />
            </div>
          </SectionWrapper>

          {/* 6. Card */}
          <SectionWrapper title="Card" description="4 variants × 2 pads (sm/md)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(["flat", "wash", "elevated", "dark"] as const).map((variant) => (
                <Card key={variant} variant={variant} pad="md">
                  <CardHeader>
                    <CardTitle>Variant: {variant}</CardTitle>
                    <CardDescription>
                      Card de demonstração com header, title, description e content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    Conteúdo do card. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card variant="flat" pad="sm">
                <CardTitle>Pad: sm</CardTitle>
                <CardDescription>Padding 24px (compacto).</CardDescription>
              </Card>
              <Card variant="elevated" pad="sm">
                <CardTitle>Elevated + sm</CardTitle>
                <CardDescription>Hover muda border + shadow.</CardDescription>
              </Card>
            </div>
          </SectionWrapper>

          {/* 7. Badge */}
          <SectionWrapper title="Badge" description="5 variants semânticas">
            <div className="flex flex-wrap gap-3">
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
          </SectionWrapper>

          {/* 8. Tabs */}
          <SectionWrapper title="Tabs" description="Radix Tabs com underline ativo">
            <Tabs defaultValue="aba1">
              <TabsList>
                <TabsTrigger value="aba1">Aba 1</TabsTrigger>
                <TabsTrigger value="aba2">Aba 2</TabsTrigger>
                <TabsTrigger value="aba3">Aba 3</TabsTrigger>
              </TabsList>
              <TabsContent value="aba1">
                <p className="text-muted-foreground">
                  Conteúdo da Aba 1. Estado inicial (defaultValue).
                </p>
              </TabsContent>
              <TabsContent value="aba2">
                <p className="text-muted-foreground">
                  Conteúdo da Aba 2. Underline anima na transição.
                </p>
              </TabsContent>
              <TabsContent value="aba3">
                <p className="text-muted-foreground">
                  Conteúdo da Aba 3.
                </p>
              </TabsContent>
            </Tabs>
          </SectionWrapper>

          {/* 9. Accordion */}
          <SectionWrapper title="Accordion" description="Radix Accordion (FAQ)">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Vocês operam ETE de outro fornecedor?
                </AccordionTrigger>
                <AccordionContent>
                  Sim. Operação assistida ou terceirizada de ETEs existentes,
                  inclusive de outros fornecedores. Avaliamos o sistema atual
                  antes de assumir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Quanto tempo dura um estudo de tratabilidade?
                </AccordionTrigger>
                <AccordionContent>
                  Depende da complexidade do efluente. Em média 2-4 semanas
                  entre coleta, ensaios em bancada e relatório técnico.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Atendem fora do estado de São Paulo?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, conforme a complexidade do projeto. Consulte o time
                  comercial para abrangência específica.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SectionWrapper>

          {/* 10. Dialog */}
          <SectionWrapper title="Dialog" description="Radix Dialog com 2 sizes">
            <DialogShowcase />
          </SectionWrapper>

          {/* 11. Tooltip */}
          <SectionWrapper title="Tooltip" description="Radix Tooltip — 4 sides">
            <div className="flex flex-wrap gap-4">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <Tooltip key={side}>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover ({side})</Button>
                  </TooltipTrigger>
                  <TooltipContent side={side}>
                    Tooltip apontando para {side}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </SectionWrapper>

          {/* 12. Breadcrumb */}
          <SectionWrapper title="Breadcrumb" description="nav aria-label='Breadcrumb'">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" as Route },
                { label: "Serviços", href: "/servicos" as Route },
                { label: "Estudo de Tratabilidade" },
              ]}
            />
          </SectionWrapper>

          {/* 13. Pagination */}
          <SectionWrapper title="Pagination" description="Página 5 de 10 com truncamento">
            <Pagination
              currentPage={5}
              totalPages={10}
              hrefForPage={(p) => `/blog?page=${p}`}
            />
          </SectionWrapper>

          {/* 14. FormMessage */}
          <SectionWrapper title="FormMessage" description="Helper, Error, Success">
            <div className="space-y-6 max-w-xl">
              <Field label="Com Helper">
                <Input type="email" placeholder="voce@empresa.com.br" />
                <FormHelper>Usaremos apenas para retorno comercial.</FormHelper>
              </Field>
              <Field label="Com Error">
                <Input
                  type="email"
                  defaultValue="email-invalido"
                  invalid
                />
                <FormError>Endereço de e-mail inválido.</FormError>
              </Field>
              <FormSuccess title="Mensagem enviada">
                Recebemos sua solicitação. Retornamos em até 1 dia útil.
              </FormSuccess>
            </div>
          </SectionWrapper>

          {/* 15. Spinner */}
          <SectionWrapper title="Spinner" description="3 sizes (16/20/24)">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2 text-foreground">
                <Spinner size={16} />
                <span className="text-sm">16px</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Spinner size={20} />
                <span className="text-sm">20px (default)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Spinner size={24} />
                <span className="text-sm">24px</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-primary-700)]">
                <Spinner size={20} />
                <span className="text-sm font-medium">colored (primary)</span>
              </div>
            </div>
          </SectionWrapper>

          {/* 16. LinkArrow */}
          <SectionWrapper title="LinkArrow" description="Wrap Next Link com seta animada (hover)">
            <div className="flex flex-wrap gap-8">
              <LinkArrow href={"/servicos" as Route}>Saiba mais</LinkArrow>
              <LinkArrow href={"/galeria" as Route}>Ver galeria</LinkArrow>
              <LinkArrow href={"/blog" as Route}>Continuar lendo</LinkArrow>
              <LinkArrow href="https://example.com" external>
                Link externo
              </LinkArrow>
            </div>
          </SectionWrapper>
        </div>
      </div>
  );
}

/* ===== Helpers ===== */

function SectionWrapper({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-display font-semibold tracking-[-0.015em] text-foreground">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="bg-card border border-[var(--color-border)] rounded-xl p-8">
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}

function CheckboxField({
  label,
  defaultChecked,
  disabled,
}: {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <Checkbox defaultChecked={defaultChecked} disabled={disabled} />
      <span className="text-[14px] text-foreground select-none">{label}</span>
    </label>
  );
}

function DialogShowcase() {
  const [openSm, setOpenSm] = useState(false);
  const [openMd, setOpenMd] = useState(false);
  return (
    <div className="flex flex-wrap gap-4">
      <Dialog open={openSm} onOpenChange={setOpenSm}>
        <DialogTrigger asChild>
          <Button variant="primary">Abrir Dialog (sm)</Button>
        </DialogTrigger>
        <DialogContent size="sm">
          <DialogHeader>
            <DialogTitle>Confirmação</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja prosseguir? Esta ação não pode ser
              desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="primary">Confirmar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openMd} onOpenChange={setOpenMd}>
        <DialogTrigger asChild>
          <Button variant="outline">Abrir Dialog (md)</Button>
        </DialogTrigger>
        <DialogContent size="md">
          <DialogHeader>
            <DialogTitle>Detalhes do estudo de tratabilidade</DialogTitle>
            <DialogDescription>
              Container max-width 720px. Bom para conteúdo mais denso ou
              forms inline.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-[15px] text-foreground">
            <p>
              Conteúdo placeholder do modal. Em produção, este espaço pode
              hospedar formulários, listas, ou descrições estendidas.
            </p>
            <div className="flex items-center gap-3">
              <Search className="size-4 text-muted-foreground" aria-hidden />
              <Trash2 className="size-4 text-muted-foreground" aria-hidden />
              <Mail className="size-4 text-muted-foreground" aria-hidden />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="primary">Fechar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
