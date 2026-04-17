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
          primary: "#3f5825",
          secondary: "#48642a",
          accent: "#5b3a2c",
          surface: "#f8f1e4",
          ink: "#1f140f"
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
          "linear-gradient(120deg, rgba(31, 20, 15, 0.86), rgba(63, 88, 37, 0.78))"
      }
    }
  },
  plugins: []
}

export default config
