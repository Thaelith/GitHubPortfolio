import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#10131a",
        surface: "#10131a",
        "surface-lowest": "#0b0e15",
        "surface-low": "#191b23",
        "surface-container": "#1d2027",
        "surface-high": "#272a31",
        "surface-highest": "#32353c",
        "surface-bright": "#363941",
        "on-surface": "#e1e2ec",
        "on-surface-variant": "#c2c6d6",
        outline: "#8c909f",
        "outline-variant": "#424754",
        primary: "#adc6ff",
        "primary-strong": "#4d8eff",
        secondary: "#b7c8e1",
        tertiary: "#ffb786",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
      },
      maxWidth: {
        container: "1100px",
      },
      fontFamily: {
        display: ["var(--font-geist)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Consolas", "monospace"],
      },
      keyframes: {
        "section-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "section-in": "section-in 720ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
