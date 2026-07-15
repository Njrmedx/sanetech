import { Arimo } from "next/font/google";
import localFont from "next/font/local";

/**
 * Body font — Arimo (Google).
 * Mantido para corpo de texto (alta legibilidade, x-height generosa).
 *
 * preload: false porque a home (Hero) nao usa Arimo — so paginas internas
 * (politicas, conteudo prose) precisam. Quando essas paginas carregarem,
 * a fonte baixa just-in-time sem warnings de "preloaded but not used".
 */
export const arimo = Arimo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
  fallback: ["Arial", "Helvetica Neue", "sans-serif"],
  preload: false,
});

/**
 * Display font — Switzer (Indian Type Foundry, OFL via Fontshare).
 * Self-hosted via next/font/local (woff2 em /public/fonts/switzer/).
 *
 * Razao da troca: Space Grotesk esta na reflex-reject list do impeccable
 * (training-data default que gera monoculture). Switzer = geometrica
 * tecnica distintiva, family unica com peso/escala contrast — alinhado
 * com a aesthetic lane Linear/Vercel B2B technical credibility.
 *
 * Audit de uso (grep components/ app/):
 *   - 500 (font-medium): eyebrow, ScrollHint label, Button base
 *   - 700 (font-bold):   H1 do Hero
 *   - 400 e 900: NAO usados em lugar nenhum -> removidos
 *
 * preload: true (default) — Hero eh critical path da home.
 */
export const switzer = localFont({
  src: [
    {
      path: "../public/fonts/switzer/switzer-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/switzer/switzer-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-display",
  fallback: ["Inter", "system-ui", "sans-serif"],
});
