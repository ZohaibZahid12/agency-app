import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        ink: {
          50: "#f4f7fa",
          100: "#cdd7e5",
          200: "#b3c1d6",
          300: "#8fa0ba",
          400: "#6c7d99",
          500: "#526080",
          600: "#404a59",
          700: "#2d3644",
          800: "#1b212c",
          900: "#10141c",
          950: "#080c16",
        },
        brand: {
          50: "#eef2fd",
          100: "#dbe6fb",
          200: "#b8cef7",
          300: "#8aadf0",
          400: "#5686e8",
          500: "#2f66de",
          600: "#1450d2",
          700: "#103fa3",
          800: "#0f3480",
          900: "#102d68",
          950: "#0a1a3d",
        },
        accent: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba8",
          300: "#ffc071",
          400: "#ff9d38",
          500: "#fd7f13",
          600: "#ee6209",
          700: "#c54a0a",
          800: "#9c3a10",
          900: "#7e3110",
          950: "#441607",
        },
        growth: {
          50: "#eefdf5",
          100: "#d7f9e5",
          200: "#b2f1cf",
          300: "#7de4b3",
          400: "#43cf92",
          500: "#1eb579",
          600: "#129262",
          700: "#107451",
          800: "#115c42",
          900: "#0f4b38",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw + 1rem, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw + 1rem, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.875rem, 2.5vw + 1rem, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.08)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 12px 32px -12px rgba(15,23,42,0.12)",
        "card-hover": "0 1px 2px rgba(15,23,42,0.06), 0 24px 48px -16px rgba(20,80,210,0.18)",
        glow: "0 0 0 1px rgba(20,80,210,0.1), 0 8px 40px -8px rgba(20,80,210,0.35)",
      },
      backgroundImage: {
        "grid-slate": "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "hero-radial": "radial-gradient(60% 50% at 50% 0%, rgba(20,80,210,0.14) 0%, rgba(20,80,210,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
