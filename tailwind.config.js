/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1D",
          900: "#0A1630",
          850: "#0D1B3A",
          800: "#122145",
          700: "#1A2C56",
          600: "#243A6B",
        },
        accent: {
          blue: "#2E6BFF",
          blueDim: "#4C7CFF",
          green: "#1FAE64",
          amber: "#E08F1A",
          red: "#DA3B3B",
          purple: "#7C5CFC",
        },
        surface: {
          DEFAULT: "#F5F7FA",
          panel: "#FFFFFF",
          border: "#E3E8F0",
          muted: "#8792A6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        panel: "0 1px 2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15,23,42,0.04)",
        pop: "0 8px 24px rgba(10, 22, 48, 0.16)",
      },
      keyframes: {
        dash: { to: { strokeDashoffset: -24 } },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: 0.7 },
          "70%": { transform: "scale(1.8)", opacity: 0 },
          "100%": { transform: "scale(1.8)", opacity: 0 },
        },
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.25 } },
      },
      animation: {
        dash: "dash 1.2s linear infinite",
        pulseRing: "pulseRing 1.8s ease-out infinite",
        blink: "blink 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

