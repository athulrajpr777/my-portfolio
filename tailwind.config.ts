import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "var(--bg)",
          surface: "var(--surface)",
          card: "var(--card-bg)",
          border: "var(--card-border)",
          red: "var(--accent-red)",
          "red-glow": "rgba(196, 0, 36, 0.4)",
          text: "var(--text)",
          muted: "#8e8e93",
          dim: "#48484a",
          neon: "#00ffcc",
        },
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        space: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(196, 0, 36, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(196, 0, 36, 0.05) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "laser-glow": "laserGlow 2s infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        laserGlow: {
          "0%": { boxShadow: "0 0 10px #c40024, 0 0 20px #c40024" },
          "100%": { boxShadow: "0 0 20px #c40024, 0 0 40px #c40024, 0 0 60px #c40024" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
    },
  },
  plugins: [],
};

export default config;
