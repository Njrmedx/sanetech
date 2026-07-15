/**
 * /galeria - registro visual de operações Sanetech em campo.
 *
 * Server route compondo (Wave 4-A, Tasks 12):
 *   1. GalleryHero (client - parallax sigilo)
 *   2. N x GallerySection (server - lightbox por seção)
 *   3. CTA strip (link /contato#diagnostico)
 *
 * Layout (site) auto-envolve Header + Footer25 + WhatsAppFloater.
 * Página exporta apenas <main>.
 *
 * AC-01 vigilance: zero referências à marca proibida em copy ou meta.
 * AC-02 vigilance: zero claim de fabricação própria.
 * AC-06 vigilance: copy sem superlativos vazios.
 *
 * Phase B-Galeria (2026-05-22).
 */

import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { GalleryHero } from "@/components/blocks/gallery-hero";
import { GallerySection } from "@/components/blocks/gallery-section";
import { GALERIA_SECTIONS } from "@/content/galeria";

export const metadata: Metadata = {
  title: "Galeria | Sanetech",
  description:
    "Registro visual de operações Sanetech em produção de água tipo 1, estudos de tratabilidade de efluentes e operação de Estações de Tratamento de Despejos Industriais.",
  openGraph: {
    title: "Galeria — Sanetech",
    description:
      "Operações Sanetech em campo: água tipo 1, tratabilidade, ETDIs.",
    type: "website",
  },
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <main>
      <GalleryHero />

      {GALERIA_SECTIONS.map((section) => (
        <GallerySection key={section.id} section={section} />
      ))}

      {/* CTA strip */}
      <section
        aria-labelledby="galeria-cta-title"
        className="container-site py-16 md:py-24 border-t border-[var(--color-border)]"
      >
        <div className="max-w-3xl">
          <h2
            id="galeria-cta-title"
            className="font-display text-3xl md:text-4xl font-medium tracking-tight text-balance"
          >
            Quer ver o que faríamos no seu caso?
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground/70 text-pretty">
            Solicite um diagnóstico técnico do seu sistema atual ou do projeto em
            estudo.
          </p>
          <div className="mt-6">
            <Button asChild variant="primary" size="md" className="rounded-full px-6">
              <Link href={"/contato#diagnostico" as Route}>
                Solicitar diagnóstico
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
