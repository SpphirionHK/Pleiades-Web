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
          900: "#09273D",
          800: "#123A5A",
          700: "#1A4B70"
        },
        accent: {
          blue: "#1E6E9E",
          orange: "#F28C28"
        },
        industrial: {
          50: "#F8FAFB",
          100: "#F3F5F6",
          200: "#D8DEE3",
          500: "#64717C",
          900: "#20272D"
        }
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "IBM Plex Sans", "Source Sans 3", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(9, 39, 61, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
