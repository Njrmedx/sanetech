import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Design System — Sanetech (interno)",
  description: "Showcase interno de UI primitives Phase B1.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFC",
};

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
