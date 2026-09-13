import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
          50: "#f5f6f8",
          100: "#e9ebf0",
          200: "#cdd2dd",
          300: "#a3adc0",
          400: "#71809c",
          500: "#516080",
          600: "#3d4a68",
          700: "#323c54",
          800: "#232a3c",
          900: "#141722",
          950: "#0b0d15",
        },
        brand: {
          50: "#eef5f9",
          100: "#d9eaf2",
          200: "#b3d4e6",
          300: "#82b7d3",
          400: "#4f96bb",
          500: "#2f7ba3",
          600: "#226389",
          700: "#1d516f",
          800: "#1c435c",
          900: "#1a394d",
          950: "#0f2530",
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
          "ui-serif",
          "Georgia",
          "serif",
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
        "card-hover": "0 1px 2px rgba(15,23,42,0.06), 0 24px 48px -16px rgba(34,99,137,0.18)",
        glow: "0 0 0 1px rgba(34,99,137,0.1), 0 8px 40px -8px rgba(34,99,137,0.35)",
      },
      backgroundImage: {
        "grid-slate": "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "hero-radial": "radial-gradient(60% 50% at 50% 0%, rgba(47,123,163,0.14) 0%, rgba(47,123,163,0) 70%)",
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
