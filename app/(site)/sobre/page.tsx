/**
 * /sobre — institutional page, persona P3 primary (PRD §8.2).
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { ServicesGrid } from "@/components/blocks/services-grid";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { ContactCard } from "@/components/blocks/contact-card";
import { BrazilIcon } from "@/components/blocks/brazil-icon";
import { PhotoShowcase } from "@/components/blocks/photo-showcase";
import { getGalleryItem } from "@/content/galeria";

import {
  SOBRE_AREAS,
  SOBRE_PRINCIPIOS,
  SOBRE_HISTORIA,
} from "@/lib/content/sobre-content";
import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";
import { buildFaqSchema, type FAQ } from "@/lib/seo/faq-schema";

export const metadata: Metadata = {
  title: "Sobre a Sanetech — Tratamento de Efluentes e Automação",
  description:
    "Sanetech: mais de 25 anos somados de experiência em desenvolvimento, instalação e operação de estações de tratamento de efluentes industriais e esgoto sanitário.",
  alternates: {
    canonical: "/sobre",
  },
};

const localBusinessSchema = buildLocalBusinessSchema();

const SOBRE_FAQS: readonly FAQ[] = [
  { q: "Ha quanto tempo a Sanetech atua?", a: "Mais de 25 anos somados de experiencia tecnica em tratamento de efluentes e automacao industrial na Regiao Serrana RJ e estados do Sudeste." },
  { q: "Voces possuem engenheiros credenciados no CREA?", a: "Sim. Projetos sao desenvolvidos e assinados por engenheiros com credenciamento ativo no CREA, conforme exigencias do licenciamento ambiental." },
  { q: "Em quais setores voces atuam?", a: "Industria quimica, farmaceutica, alimenticia, papel e celulose, metalurgia, textil, condominios residenciais e comerciais, laboratorios clinicos e farmaceuticos." },
  { q: "Como funciona o modelo de atendimento?", a: "Um unico interlocutor cobre o ciclo completo do diagnostico em laboratorio ao projeto, implantacao e eventual operacao terceirizada da estacao." },
  { q: "Voces emitem relatorios de monitoramento?", a: "Sim. Para contratos de operacao assistida ou terceirizada emitimos relatorios periodicos de parametros de lancamento conforme exigencias do orgao ambiental." },
];

const sobreFaqSchema = buildFaqSchema(SOBRE_FAQS);

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://sanetech.com.br/sobre",
  name: "Sobre a Sanetech",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sanetech.com.br/" },
    { "@type": "ListItem", position: 2, name: "Sobre", item: "https://sanetech.com.br/sobre" },
  ],
};

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreFaqSchema) }}
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container-site max-w-[720px]">
          <h1 className="text-[clamp(2rem,2.5vw+1rem,3rem)] font-display font-semibold text-foreground tracking-[-0.02em] text-balance">
            Quem é a Sanetech.
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-foreground/85 max-w-[600px]">
            Engenharia, automação e operação de tratamento de efluentes. Mais de 25 anos somados de experiência.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: História prose (col-5) */}
            <div className="lg:col-span-5">
              <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
                História
              </p>
              <div className="space-y-5 text-[17px] leading-relaxed text-foreground/85">
                {SOBRE_HISTORIA.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            {/* Right: control panel photo (col-7) — operational evidence companion to text */}
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <Image
                src="/images/sobre/historia-control-panel.jpg"
                alt="Painel de controle analógico em estação de tratamento de efluentes — manômetros, válvulas e indicadores de processo em operação. Região Serrana RJ."
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site">
          <p className="text-[12px] uppercase tracking-[0.12em] font-medium text-[var(--color-primary-700)] mb-3">
            Áreas de atuação
          </p>
          <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] max-w-[640px] text-balance">
            O que fazemos
          </h2>
          <ServicesGrid services={SOBRE_AREAS} columns={3} className="mt-10" />
        </div>
      </section>

      <ProcessSteps {...SOBRE_PRINCIPIOS} />

      <PhotoShowcase
        variant="row"
        items={[
          getGalleryItem("etdi-painel-eletrico-multimetro"),
          getGalleryItem("tratabilidade-rotaevaporador-tecnico"),
        ]}
        eyebrow="Equipe em campo"
        title="Técnicos Sanetech em operação real"
        subtitle="Diagnóstico elétrico em ETDI e ensaios de tratabilidade — todos os serviços executados pela própria equipe."
      />

      <section className="py-16 lg:py-20 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-[560px]">
              <h2 className="text-[clamp(1.5rem,1.5vw+1rem,2rem)] font-display font-semibold text-foreground tracking-[-0.015em] text-balance">
                Onde atuamos
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-foreground/85">
                Atendemos demandas em todo o território nacional. Equipe técnica móvel para visitas, implantação e manutenção em campo.
              </p>
              <p className="mt-4 text-[15px] text-foreground/70">
                Conheça os{" "}
                <Link
                  href="/galeria"
                  className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
                >
                  projetos executados
                </Link>{" "}
                ou saiba como funciona o{" "}
                <Link
                  href="/servicos/estudo-de-tratabilidade"
                  className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)]"
                >
                  estudo de tratabilidade
                </Link>
                .
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <BrazilIcon
                size={320}
                className="text-[var(--color-primary-700)]"
                aria-label="Mapa do Brasil indicando presença operacional Sanetech em todo o território nacional."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[var(--color-primary-50)]">
        <div className="container-site max-w-[480px]">
          <ContactCard
            icon={MessageCircle}
            title="Fale com nossa equipe técnica"
            description="Diagnóstico técnico por WhatsApp ou formulário."
            cta={{ label: "Abrir contato", href: "/contato" }}
          />
        </div>
      </section>
    </>
  );
}
