import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zoho: {
          blue: "#1F6FEB",
          "blue-dark": "#1354BF",
          "blue-light": "#EBF3FE",
          red: "#EB3D3D",
          green: "#00A86B",
          yellow: "#F5A623",
          navy: "#0A1128",
          "navy-card": "#101D42",
        },
      },
      fontFamily: {
        sans: ["'Zoho Puvi'", "var(--font-heading)", "var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["'Zoho Puvi'", "var(--font-heading)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)",
        "soft-hover": "0 14px 34px -4px rgba(31, 111, 235, 0.12), 0 8px 16px -2px rgba(15, 23, 42, 0.08)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
