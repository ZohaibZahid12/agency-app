import { ImageResponse } from "next/og"; 

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c81f8 0%, #372ba1 100%)",
        }}
      >
        <svg
          width="112"
          height="112"
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
    ),
    size
  );
}
