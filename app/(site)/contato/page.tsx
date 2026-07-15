/**
 * /contato — contact hub: 4 channel cards + unified contact form.
 *
 * Phase B6c (2026-05-13): consolidacao dos 2 forms (Diagnostico+Orcamento)
 * em FormContato unico com intent dropdown. Large MessagesSquare icon
 * como companheiro visual da form em 2-col.
 */

import type { Metadata } from "next";
import Image from "next/image";
import { MessagesSquare } from "lucide-react";

import { ContactCard } from "@/components/blocks/contact-card";
import { FormContato } from "@/components/blocks/form-contato";
import { LinkArrow } from "@/components/ui/link-arrow";
import { PhotoShowcase } from "@/components/blocks/photo-showcase";
import { getGalleryItem } from "@/content/galeria";

import { CONTATO_CARDS } from "@/lib/content/contato-content";
import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";
import { buildFaqSchema, type FAQ } from "@/lib/seo/faq-schema";

export const metadata: Metadata = {
  title: "Contato — Sanetech | Diagnóstico técnico e orçamento",
  description:
    "Fale com a equipe técnica da Sanetech. WhatsApp, e-mail, telefone. Formulário único de diagnóstico ou orçamento para tratamento de efluentes.",
  alternates: {
    canonical: "/contato",
  },
};

const localBusinessSchema = buildLocalBusinessSchema();

const CONTATO_FAQS: readonly FAQ[] = [
  { q: "Como e o processo para solicitar orcamento?", a: "Preencha o formulario de diagnostico descrevendo o efluente ou necessidade. A equipe tecnica retorna com diagnostico preliminar antes de qualquer proposta comercial." },
  { q: "Qual o prazo de retorno apos contato?", a: "A equipe tecnica retorna em ate 1 dia util para avaliacoes tecnicas iniciais via WhatsApp ou e-mail." },
  { q: "Voces atendem chamadas urgentes de manutencao?", a: "Para clientes com contrato de operacao ou manutencao, oferecemos suporte tecnico prioritario. Novos clientes podem contatar via WhatsApp para avaliacao do caso." },
  { q: "E necessario visita tecnica antes do orcamento?", a: "Para projetos novos, o caminho recomendado e estudo de tratabilidade laboratorial com amostra do efluente real. Visita tecnica e feita na sequencia para levantamento de campo." },
  { q: "Voces atendem clientes fora do Rio de Janeiro?", a: "Sim. Atendemos projetos em todo o Sudeste e demais regioes conforme escopo e complexidade tecnica do caso." },
];

const contatoFaqSchema = buildFaqSchema(CONTATO_FAQS);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://sanetech.com.br/contato",
  name: "Contato — Sanetech",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sanetech.com.br/" },
    { "@type": "ListItem", position: 2, name: "Contato", item: "https://sanetech.com.br/contato" },
  ],
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contatoFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PhotoShowcase
        variant="solo"
        items={[getGalleryItem("agua-tratada-vertedouro")]}
        ariaLabel="Vista panorâmica — coleta de amostra de água tratada em vertedouro"
        showCta={false}
        className="pb-0 md:pb-0"
      />

      <section className="relative isolate overflow-hidden bg-[var(--color-primary-900)] text-white py-24 lg:py-32">
        <Image
          src="/images/contato/hero-pressure-gauges.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover select-none pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-900)]/90 via-[var(--color-primary-900)]/70 to-[var(--color-primary-900)]/45"
          aria-hidden="true"
        />
        <div className="container-site relative z-10">
          <div className="max-w-[720px]">
            <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold tracking-[-0.02em] text-balance text-white">
              Fale com a equipe técnica.
            </h1>
            <p className="mt-5 text-[18px] leading-relaxed text-white/85 max-w-[600px]">
              Atendimento técnico por WhatsApp, e-mail ou telefone. Diagnóstico ou orçamento via formulário único.
            </p>
            <div className="mt-8">
              <LinkArrow
                href="/contato#contato"
                className="!text-white hover:!text-white/80 [&_*]:!text-white"
              >
                Ir para o formulário
              </LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {CONTATO_CARDS.map((card) => (
              <ContactCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="py-16 lg:py-20 bg-[var(--color-primary-50)] scroll-mt-24"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: large icon + heading + helper */}
            <div className="lg:col-span-5">
              <MessagesSquare
                strokeWidth={1}
                className="text-[var(--color-primary-700)]"
                style={{ width: 240, height: 240 }}
                aria-hidden="true"
              />
              <div className="mt-8 max-w-[440px]">
                <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
                  Envie sua solicitação.
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-foreground/70">
                  Selecione o tipo, preencha quatro campos. Abrimos o WhatsApp com sua mensagem pronta e seguimos a conversa com nosso atendente técnico.
                </p>
              </div>
            </div>
            {/* Right: unified form */}
            <div className="lg:col-span-7">
              <FormContato />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
