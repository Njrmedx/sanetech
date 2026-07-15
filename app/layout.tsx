import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { arimo, switzer } from "./fonts";
import { BUSINESS_INFO } from "@/lib/seo/business-info";
import "../styles/globals.css";

const SITE_URL = BUSINESS_INFO.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sanetech — Tratamento de Efluentes Industriais e ETEs",
    template: "%s | Sanetech",
  },
  description:
    "Projeto, instalação, operação e manutenção de estações de tratamento de efluentes industriais e esgoto sanitário. Estudo de tratabilidade próprio. 25+ anos de experiência somada.",
  applicationName: "Sanetech",
  authors: [{ name: "Sanetech Controle e Automação" }],
  generator: "Next.js",
  keywords: [
    "tratamento de efluentes industriais",
    "estação de tratamento de efluentes",
    "estudo de tratabilidade",
    "operação de ETE",
    "automação de ETE",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sanetech",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#2c3892",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${arimo.variable} ${switzer.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#conteudo-principal" className="visually-hidden focus:not-sr-only">
          Pular para o conteúdo principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
