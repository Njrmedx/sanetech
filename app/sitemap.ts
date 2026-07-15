import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import {
  SERVICOS_HORIZONTAIS,
  COMPLEXOS_TRATAMENTO,
  TRATAMENTO_AGUAS,
} from "@/lib/content/services-list";

const BASE_URL = BUSINESS_INFO.url; // "https://sanetech.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homeEntry: MetadataRoute.Sitemap[number] = {
    url: BASE_URL,
    lastModified,
    changeFrequency: "monthly",
    priority: 1.0,
  };

  const topLevelEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/complexos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tratamento-aguas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/solucoes/laboratorios-clinicos-farmaceuticos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/galeria`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // ServiceEntry uses `href` (e.g. "/servicos/projetos-sob-medida") — no slug field.
  const servicosDetailEntries: MetadataRoute.Sitemap = SERVICOS_HORIZONTAIS.map(
    (entry) => ({
      url: `${BASE_URL}${entry.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const complexosDetailEntries: MetadataRoute.Sitemap = COMPLEXOS_TRATAMENTO.map(
    (entry) => ({
      url: `${BASE_URL}${entry.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const tratamentoDetailEntries: MetadataRoute.Sitemap = TRATAMENTO_AGUAS.map(
    (entry) => ({
      url: `${BASE_URL}${entry.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const legalEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos-de-uso`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politica-de-cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    homeEntry,
    ...topLevelEntries,
    ...servicosDetailEntries,
    ...complexosDetailEntries,
    ...tratamentoDetailEntries,
    ...legalEntries,
  ];
}
