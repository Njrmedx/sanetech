import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/seo/business-info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all crawlers, exclude internal design-system route
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/design-system"],
      },
      // AI overview crawlers: allow for citation strategy (per F7 Tier 3)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/design-system"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/design-system"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/design-system"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/design-system"],
      },
    ],
    sitemap: `${BUSINESS_INFO.url}/sitemap.xml`,
    host: BUSINESS_INFO.url,
  };
}
