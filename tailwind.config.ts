import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F2EFE4",
        paper: "#1C2620",
        gold: "#3F6B4C",
        goldsoft: "#5C8A68",
        slate: "#78776A",
        line: "rgba(28,38,32,0.12)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-space)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
