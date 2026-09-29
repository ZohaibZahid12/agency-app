import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const alt = "CodingCurves — Product studio for web, mobile & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoBase64 = readFileSync(join(process.cwd(), "public/logo.png")).toString("base64");

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
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${logoBase64}`}
            width={280}
            height={82}
            alt="CodingCurves"
          />
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
