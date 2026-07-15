/**
 * /solucoes/laboratorios-clinicos-farmaceuticos — P2 persona landing.
 *
 * 8-section flow per PRD §8.11: hero (Droplets 280px) / oferta 3-card /
 * definicao tipo 1 + standards badges / modelo concessao (destaque
 * comercial) / reuso expurgo / acompanhamento qualidade / FAQ §6.5 /
 * CTA dark FormContato orçamento.
 *
 * CRITICAL: all copy from PRD §6.1 vocab aprovado. AC-01 + AC-02 risk
 * máximo. NUNCA marca do fabricante, "fabricamos", "fabricante", "marca
 * própria", "patenteado". Frase ratificada: "fabricação customizada".
 *
 * Phase B7-C (2026-05-13).
 */

import type { Metadata } from "next";
import {
  Check,
  ClipboardList,
  Droplets,
  Recycle,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { Route } from "next";

import { FAQ } from "@/components/blocks/faq";
import { FormContato } from "@/components/blocks/form-contato";
import { PhotoShowcase } from "@/components/blocks/photo-showcase";
import { getGalleryItem } from "@/content/galeria";
import { Button } from "@/components/ui/button";
import { Abbr } from "@/components/ui/abbr";

export const metadata: Metadata = {
  title: "Água Tipo 1 para Laboratórios Clínicos e Farmacêuticos",
  description:
    "Equipamentos de produção de água tipo 1 com fabricação customizada para laboratórios clínicos e farmacêuticos. Modelo de concessão com manutenção e acompanhamento de qualidade.",
  keywords: [
    "água tipo 1 para laboratório",
    "água ultrapura para laboratório",
    "reuso de água de expurgo laboratório",
    "concessão equipamento água tipo 1",
  ],
  openGraph: {
    title: "Água Tipo 1 para Laboratórios Clínicos e Farmacêuticos",
    description:
      "Equipamentos com fabricação customizada e modelo de concessão. Manutenção e acompanhamento de qualidade inclusos.",
    url: "https://sanetech.com.br/solucoes/laboratorios-clinicos-farmaceuticos",
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "/solucoes/laboratorios-clinicos-farmaceuticos",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Água Tipo 1 para Laboratórios Clínicos e Farmacêuticos",
  description:
    "Equipamentos de produção de água tipo 1 com fabricação customizada conforme requisitos do laboratório, modelo de concessão com manutenção e acompanhamento de qualidade inclusos.",
  serviceType: "Equipamento de água ultrapura tipo 1 em concessão",
  provider: {
    "@type": "Organization",
    name: "Sanetech",
    legalName: "SANETECH CONTROLE E AUTOMAÇÃO LTDA",
    url: "https://sanetech.com.br",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Laboratório clínico e farmacêutico",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sanetech.com.br/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Soluções",
      item: "https://sanetech.com.br/solucoes/laboratorios-clinicos-farmaceuticos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Laboratórios Clínicos e Farmacêuticos",
      item: "https://sanetech.com.br/solucoes/laboratorios-clinicos-farmaceuticos",
    },
  ],
};

interface Oferta {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const OFERTAS: Oferta[] = [
  {
    icon: Wrench,
    title: "Equipamentos tipo 1",
    sub: "Equipamentos de produção de água tipo 1 com fabricação customizada conforme requisitos do laboratório.",
  },
  {
    icon: Recycle,
    title: "Reuso de expurgo",
    sub: "Solução de reuso de água de expurgo de equipamentos de água ultrapura, reduzindo o consumo total do laboratório.",
  },
  {
    icon: ShieldCheck,
    title: "Manutenção e acompanhamento",
    sub: "Manutenção preventiva, corretiva e acompanhamento contínuo da qualidade da água produzida.",
  },
];

const MODELO_FEATURES = [
  "Sem CAPEX. Mensalidade fixa em contrato.",
  "Manutenção preventiva e corretiva inclusas.",
  "Acompanhamento contínuo da qualidade da água produzida.",
  "Suporte técnico definido em contrato.",
];

const FAQ_ITEMS = [
  {
    q: "O que é água tipo 1?",
    a: "Água ultrapura conforme ASTM D1193 Tipo I, com baixa condutividade, baixo TOC e ausência de contaminantes interferentes. Exigida em análises clínicas e farmacêuticas de alta sensibilidade como HPLC, espectrometria e biologia molecular.",
  },
  {
    q: "Como funciona a concessão?",
    a: "O equipamento é instalado no laboratório sob contrato de concessão (locação ou comodato), com manutenção preventiva, corretiva e acompanhamento de qualidade inclusos. O laboratório paga mensalidade fixa, sem CAPEX.",
  },
  {
    q: "O que é reuso de expurgo?",
    a: "Sistemas de produção de água ultrapura geram, por design, um volume de água rejeitada (expurgo). A solução de reuso recupera essa água e a redireciona para usos gerais do laboratório, reduzindo o consumo total.",
  },
  {
    q: "Qual a manutenção incluída?",
    a: "Manutenção preventiva programada, corretiva sob demanda e acompanhamento periódico da qualidade da água produzida. Periodicidade e escopo exato definidos em contrato.",
  },
  {
    q: "Atendem qual região?",
    a: "Atendimento conforme alcance operacional da empresa, confirmado no diagnóstico inicial.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Solução
              </p>
              <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
                Água tipo 1 para laboratórios clínicos e farmacêuticos.
              </h1>
              <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[600px]">
                Equipamentos de produção de água ultrapura com fabricação customizada, manutenção inclusa e acompanhamento contínuo da qualidade. Modelo de concessão: sem CAPEX.
              </p>
              <div className="mt-8">
                <Button asChild variant="primary" size="lg" className="rounded-full px-7">
                  <a href="#cta">Solicitar orçamento</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Droplets
                strokeWidth={1}
                className="text-[var(--color-primary-700)]"
                style={{ width: 280, height: 280 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. O que oferecemos */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="max-w-[820px] mb-10">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Oferta
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              O que oferecemos
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {OFERTAS.map((o, idx) => {
              const Icon = o.icon;
              return (
                <li
                  key={idx}
                  className="bg-card border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 lg:p-7"
                >
                  <Icon
                    className="h-7 w-7 text-[var(--color-primary-700)] shrink-0"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-[18px] font-semibold text-foreground tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">
                    {o.sub}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 3. O que é água tipo 1 */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-site">
          <div className="max-w-[760px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Definição técnica
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              O que é água tipo 1
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-foreground/85">
              Água ultrapura de classificação técnica conforme padrões internacionais, exigida para uso em análises de alta sensibilidade: <Abbr term="HPLC" />, espectrometria de massa, biologia molecular, química analítica de traços. Parâmetros típicos incluem resistividade próxima a 18 MΩ·cm a 25°C, baixo <Abbr term="TOC" /> e ausência de contaminantes interferentes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {(
                [
                  { key: "ASTM D1193 Tipo I", abbr: "ASTM D1193" },
                  { key: "CLSI CLRW", abbr: "CLSI CLRW" },
                  { key: "USP", abbr: "USP" },
                ] as const
              ).map(({ key, abbr }) => (
                <span
                  key={key}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--color-primary-300)] bg-[var(--color-primary-50)] text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)]"
                >
                  <Abbr term={abbr}>{key}</Abbr>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modelo de concessão (destaque comercial) */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                Modelo comercial
              </p>
              <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
                Equipamento como serviço
              </h2>
              <div className="mt-6 space-y-5">
                <p className="text-[17px] leading-relaxed text-foreground/85">
                  O laboratório recebe o equipamento configurado no local, com manutenção preventiva, corretiva e acompanhamento da qualidade da água produzida inclusos. Pagamento via mensalidade fixa em contrato de concessão (locação ou comodato), sem CAPEX inicial.
                </p>
                <p className="text-[17px] leading-relaxed text-foreground/85">
                  Modelo adequado a laboratórios que preferem opex sobre capex e exigem rastreabilidade da qualidade da água ao longo do tempo.
                </p>
                <p className="text-[15px] text-foreground/70">
                  Especificação técnica dos{" "}
                  <Link
                    href={"/servicos/equipamentos-agua-pura-laboratorios" as Route}
                    className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
                  >
                    equipamentos de bancada
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ul className="space-y-4">
                {MODELO_FEATURES.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="h-5 w-5 mt-1 shrink-0 text-[var(--color-primary-700)]"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="text-[16px] leading-relaxed text-foreground/85">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reuso de expurgo */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-site">
          <div className="max-w-[760px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Diferencial técnico
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Solução de reuso de água de expurgo
            </h2>
            <div className="mt-6 space-y-5">
              <p className="text-[17px] leading-relaxed text-foreground/85">
                Sistemas de produção de água ultrapura geram, por design, um volume de água rejeitada (o expurgo). A solução de reuso recupera essa água e a redireciona para usos gerais do laboratório (lavagem de vidraria, alimentação de banho-maria, irrigação interna), reduzindo o consumo total e o custo operacional de água do laboratório.
              </p>
              <p className="text-[17px] leading-relaxed text-foreground/85">
                Implementação modular: integrada ao sistema de produção de água tipo 1, sem interferência no fluxo principal.
              </p>
              <p className="text-[15px] text-foreground/70">
                Saiba mais sobre{" "}
                <Link
                  href={"/tratamento-aguas/agua-tipo-1-laboratorios" as Route}
                  className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
                >
                  água Tipo 1 por osmose reversa e <Abbr term="EDI" />
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Acompanhamento de qualidade */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <div className="max-w-[760px]">
            <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
              Pós-implantação
            </p>
            <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
              Acompanhamento da qualidade da água produzida
            </h2>
            <div className="mt-6 space-y-5">
              <p className="text-[17px] leading-relaxed text-foreground/85">
                Diferencial do modelo comodato Sanetech: monitoramento periódico dos parâmetros de saída (resistividade, TOC, contagem de partículas), garantindo aderência ao padrão técnico ao longo do ciclo operacional. Registros documentados para auditorias internas e regulatórias do laboratório.
              </p>
              <p className="text-[17px] leading-relaxed text-foreground/85">
                A periodicidade do acompanhamento é definida em contrato conforme criticidade do uso e exigências regulatórias específicas do laboratório.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PhotoShowcase
        variant="row"
        items={[
          getGalleryItem("reuso-03"),
          getGalleryItem("laboratorio-dasa"),
        ]}
        eyebrow="Sistemas em laboratórios reais"
        title="Manutenção e operação de água tipo 1"
        subtitle="Equipamento operado por técnico Sanetech em rotina de laboratório clínico."
      />

      {/* 7. FAQ */}
      <FAQ
        eyebrow="Dúvidas"
        title="Perguntas frequentes"
        items={FAQ_ITEMS}
        className="bg-background"
      />

      {/* 8. CTA dark + form */}
      <section
        id="cta"
        className="py-20 lg:py-28 bg-[var(--color-primary-900)] text-white scroll-mt-24"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-300)] mb-3">
                Próximo passo
              </p>
              <h2 className="text-[clamp(1.875rem,2vw+1rem,2.5rem)] font-display font-semibold tracking-[-0.02em] leading-[1.1] text-balance text-white">
                Solicite uma proposta de concessão para o seu laboratório.
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/85 max-w-[560px]">
                Envie o perfil de uso do laboratório. Retornamos com proposta técnica e comercial direta.
              </p>
              <div className="mt-8">
                <FormContato defaultIntent="orcamento" />
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0">
              <ClipboardList
                strokeWidth={1}
                className="text-[var(--color-primary-300)]"
                style={{ width: 240, height: 240 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
