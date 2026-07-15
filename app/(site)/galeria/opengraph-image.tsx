/**
 * /galeria OG image (1200x630) - Wave 4-A Task 13.
 *
 * Edge runtime (Next 16 requirement para next/og).
 * Sistema sans-serif default (sem font fetch overhead).
 * Gradient brand Sanetech (indigo accent #2c3892, surface #FAFAFC).
 *
 * AC-01 vigilance: zero referências à marca proibida no SVG output.
 *
 * Phase B-Galeria (2026-05-22).
 */

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Galeria — operações Sanetech em campo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background:
            "linear-gradient(135deg, #FAFAFC 0%, #E8EAF0 60%, #C5CAD9 100%)",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 1.6,
            color: "#2c3892",
            marginBottom: 16,
          }}
        >
          Sanetech · Galeria
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: -1.4,
            maxWidth: 900,
          }}
        >
          Operações Sanetech, em campo.
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#404040",
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          Água tipo 1, estudos de tratabilidade e operação de ETDIs.
        </div>
      </div>
    ),
    { ...size },
  );
}
