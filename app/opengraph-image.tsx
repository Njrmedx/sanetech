import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sanetech | Tratamento de Efluentes e Engenharia Ambiental";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #2c3892 0%, #1e2870 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              opacity: 0.9,
              letterSpacing: "0.05em",
            }}
          >
            SANETECH
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Tratamento de efluentes que come&#231;a em laborat&#243;rio.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 24,
            opacity: 0.85,
          }}
        >
          <div>Engenharia ambiental + automa&#231;&#227;o industrial</div>
          <div style={{ fontSize: 20 }}>sanetech.com.br</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
