import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const markBase64 = readFileSync(join(process.cwd(), "public/logo-mark.png")).toString("base64");

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${markBase64}`}
          width={30}
          height={31}
          alt="CodingCurves"
        />
      </div>
    ),
    size
  );
}
