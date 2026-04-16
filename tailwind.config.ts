import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1B5E20",
          secondary: "#F9A825",
          accent: "#5D4037",
          surface: "#F8F6F1",
          ink: "#17201A"
        }
      },
      boxShadow: {
        soft: "0 14px 40px rgba(17, 24, 39, 0.08)"
      },
      borderRadius: {
        card: "8px",
        section: "16px"
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(120deg, rgba(11, 31, 13, 0.86), rgba(27, 94, 32, 0.72))"
      }
    }
  },
  plugins: []
}

export default config
