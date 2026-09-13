import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          borderRadius: 8,
          background: "linear-gradient(135deg, #7c81f8 0%, #372ba1 100%)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
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
