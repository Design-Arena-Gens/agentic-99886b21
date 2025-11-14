import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0f172a",
        azure: "#38bdf8",
        emerald: "#34d399"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system"]
      },
      boxShadow: {
        neon: "0 20px 80px -40px rgba(56, 189, 248, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;
