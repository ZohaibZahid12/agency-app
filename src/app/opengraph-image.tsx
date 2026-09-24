import { ImageResponse } from "next/og";

export const alt = "CodingCurves — Product studio for web, mobile & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #ffffff 0%, #eef2fd 55%, #dbe6fb 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "linear-gradient(135deg, #2f66de 0%, #1450d2 50%, #773CDD 100%)",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="19" cy="5" r="2" fill="#ffffff" />
              <circle cx="5" cy="19" r="2" fill="#ffffff" />
              <path d="M5 17A12 12 0 0 1 17 5" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700, color: "#080c16", lineHeight: 1 }}>
              Coding
            </span>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#1450d2",
                letterSpacing: 6,
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              Curves
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 72,
              fontWeight: 700,
              color: "#080c16",
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            We help ambitious teams build products that scale.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#526080" }}>
            Web · Mobile · AI · DevOps — from idea to infrastructure.
          </div>
        </div>
      </div>
    ),
    size
  );
}
