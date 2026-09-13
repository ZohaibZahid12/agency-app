import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codingcurves.com"),
  title: {
    default: "CodingCurves | Product Studio for Web, Mobile & AI",
    template: "%s | CodingCurves",
  },
  description:
    "CodingCurves designs and builds web, mobile, and AI-powered products for startups and growing teams — product design, engineering, DevOps, and scaling under one roof.",
  keywords: [
    "web development",
    "mobile app development",
    "product design",
    "branding",
    "AI development",
    "data pipelines",
    "devops",
    "product scaling",
    "software development agency",
  ],
  openGraph: {
    title: "CodingCurves | Product Studio for Web, Mobile & AI",
    description:
      "We design, build, and scale digital products for startups and growing engineering teams.",
    url: "https://www.codingcurves.com",
    siteName: "CodingCurves",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@codingcurves",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
