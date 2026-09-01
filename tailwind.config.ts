import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: "#111827",
          charcoal: "#1F2937",
          emerald: "#10B981",
          amber: "#F59E0B",
          red: "#EF4444",
        },
      },
    },
  },
  plugins: [],
};
export default config;
