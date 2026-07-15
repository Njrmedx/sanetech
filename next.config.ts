import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  typedRoutes: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // B10 (2026-05-23) — complexos removidos: 308 permanent (Next.js permanent: true) — SEO-equiv to 301
      { source: "/complexos/eta",          destination: "/complexos", permanent: true },
      { source: "/complexos/ete",          destination: "/complexos", permanent: true },
      { source: "/complexos/etac-cinza",   destination: "/complexos", permanent: true },
      { source: "/complexos/etac-chuva",   destination: "/complexos", permanent: true },
      // B13 (2026-05-28) — ETEBA + equipamentos-industriais-bancada removidos: 308 permanent
      { source: "/complexos/eteba",        destination: "/complexos", permanent: true },
      { source: "/tratamento-aguas/equipamentos-industriais-bancada", destination: "/tratamento-aguas", permanent: true },
      // B10 (2026-05-23) — Cases temporariamente desativado: 307 temporary (permanent: false) → /galeria (vai voltar)
      { source: "/cases",                  destination: "/galeria",   permanent: false },
      { source: "/cases/:slug",            destination: "/galeria",   permanent: false },
    ];
  },
};

export default nextConfig;
