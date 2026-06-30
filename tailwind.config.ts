import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B0F14",
          800: "#005F9E",
          700: "#006FB7"
        },
        accent: {
          blue: "#006FB7",
          orange: "#006FB7"
        },
        industrial: {
          50: "#F7FAFC",
          100: "#EDF3F7",
          200: "#D6E0E7",
          500: "#5E6B76",
          900: "#111820"
        }
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "IBM Plex Sans", "Source Sans 3", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 38px rgba(0, 82, 138, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
