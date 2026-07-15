/**
 * SiteLayout — chrome global do (site) group.
 *
 * Envolve TODAS as paginas do (site) group com Header + Footer +
 * WhatsAppFloater. Site cookieless (Phase B2.1) — sem CookieBanner.
 *
 * <main id="conteudo-principal"> casa com o skip-link do RootLayout.
 */

import { Header } from "@/components/blocks/header";
import { Footer } from "@/components/shadcnblocks/footer-25";
import { WhatsAppFloater } from "@/components/blocks/whatsapp-floater";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Header />
      <main id="conteudo-principal">{children}</main>
      <Footer />
      <WhatsAppFloater />
    </TooltipProvider>
  );
}
