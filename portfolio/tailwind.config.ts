/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0b",
          2: "#111113",
          3: "#18181b",
        },
        surface: {
          DEFAULT: "#1c1c1f",
          2: "#242428",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          2: "rgba(255,255,255,0.12)",
        },
        text: {
          primary: "#f0ede8",
          secondary: "#8a8880",
          tertiary: "#555350",
        },
        accent: {
          DEFAULT: "#4f8ef7",
          dim: "rgba(79,142,247,0.12)",
          glow: "rgba(79,142,247,0.25)",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(52px,7vw,96px)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(34px,5vw,58px)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(26px,3.5vw,40px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%,100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(1.2)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16,1,0.3,1)",
        "in-out-standard": "cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [],
};
