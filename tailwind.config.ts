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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bg: {
          deep: "#050505",    // Hadi Theme: Pitch Black
          surface: "#121212", // Dark Surface
        },
        primary: {
          DEFAULT: "#D90429", // Hadi Theme: Blood Red
          foreground: "#FFFFFF",
        },
        accent: {
          glow: "#EF233C",    // Secondary Bright Red
        },
        text: {
          main: "#FAFAFA",    // White
          muted: "#A1A1AA",   // Gray
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-cinzel)", "serif"], // Added Cinzel for headings
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 2rem))" },
        },
        glow: {
          from: { boxShadow: "0 0 10px #D90429" }, // Red Glow Start
          to: { boxShadow: "0 0 20px #EF233C" },   // Red Glow End
        },
      },
    },
  },
  plugins: [],
};
export default config;