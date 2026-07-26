/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "#07070b",
        surface: {
          DEFAULT: "#0d0d14",
          elevated: "#131320",
          border: "rgba(245,245,247,0.08)",
        },
        foreground: "#f5f5f7",
        muted: "#9a9aa8",
        primary: {
          50: "#f1efff",
          100: "#e4e0ff",
          200: "#cbc3ff",
          300: "#a99aff",
          400: "#8c72ff",
          500: "#7c5cff",
          600: "#6a3ffb",
          700: "#5a2fe0",
          800: "#4a26b8",
          900: "#3d2296",
          950: "#241556",
        },
        accent: {
          50: "#fff9ec",
          100: "#fff0c9",
          200: "#ffe08c",
          300: "#ffcb4d",
          400: "#ffb521",
          500: "#f59e0b",
          600: "#d6820a",
          700: "#b3630c",
          800: "#8f4d10",
          900: "#763f10",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(0,0,0,0.35)",
        "soft-lg": "0 24px 64px -16px rgba(0,0,0,0.5)",
        glow: "0 0 60px -12px rgba(124,92,255,0.55)",
        "glow-accent": "0 0 60px -12px rgba(245,158,11,0.45)",
        "inner-border": "inset 0 0 0 1px rgba(245,245,247,0.08)",
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(60% 50% at 15% 10%, rgba(124,92,255,0.25) 0%, rgba(124,92,255,0) 60%), radial-gradient(50% 45% at 90% 15%, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0) 60%), radial-gradient(60% 60% at 50% 100%, rgba(124,92,255,0.14) 0%, rgba(124,92,255,0) 60%)",
        "grid-pattern":
          "linear-gradient(rgba(245,245,247,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,247,0.055) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(245,245,247,0.08) 0%, rgba(245,245,247,0) 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
