/**
 * Sanetech business info — single source of truth.
 *
 * Centraliza dados públicos do negócio (legal name, CNPJ, address, contato).
 * Consumido por Footer25, /contato ContactCards, WhatsApp formatter/floater,
 * homepage CTAs, catálogo CTAs, e JSON-LD Organization schemas em 7 pages
 * standalone.
 *
 * Por que hardcoded ao invés de env vars: dados são públicos (rodapé,
 * JSON-LD), Sanetech é single-tenant single-environment, owner não
 * gerencia Vercel dashboard. Env-var indirection adicionava complexidade
 * sem benefício real. Para atualizar, editar este arquivo + rebuild.
 *
 * Exception: SHADCNBLOCKS_API_KEY (secret) permanece em .env.local.
 *
 * Phase post-B7-D (2026-05-14): real owner data + full hardcode simplification.
 */

export const BUSINESS_INFO = {
  name: "Sanetech",
  legalName: "SANETECH CONTROLE E AUTOMAÇÃO LTDA",
  cnpj: "05.950.182/0001-85",
  url: "https://sanetech.com.br",
  email: "contato@sanetech.com.br",
  /** Display format for tel: links + Footer. */
  telephone: "+55 24 99321-0383",
  /** Digits-only format for wa.me/<number>. */
  whatsappNumber: "5524993210383",
  address: {
    streetAddress: "Estrada União Indústria, 32.561 (Loja 07)",
    neighborhood: "Posse",
    addressLocality: "Petrópolis",
    addressRegion: "RJ",
    postalCode: "25770-470",
    addressCountry: "BR",
  },
  /** Pre-formatted single-line address for Footer/ContactCard display. */
  addressFormatted:
    "Estrada União Indústria, 32.561 (Loja 07), Posse, Petrópolis - RJ, CEP 25770-470",
} as const;

/**
 * Schema.org PostalAddress shape for JSON-LD Organization.address.
 * Drop-in spread or assign to `address:` field.
 */
export const BUSINESS_ADDRESS_SCHEMA = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS_INFO.address.streetAddress,
  addressLocality: BUSINESS_INFO.address.addressLocality,
  addressRegion: BUSINESS_INFO.address.addressRegion,
  postalCode: BUSINESS_INFO.address.postalCode,
  addressCountry: BUSINESS_INFO.address.addressCountry,
} as const;
