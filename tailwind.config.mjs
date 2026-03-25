/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        ink:     "#0a0a0a",
        dim:     "#555558",
        rule:    "#e5e5e5",
        surface: "#f5f5f7",
        mark:    "#e10600",
      },
      fontSize: {
        display: ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        title:   ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
      },
      borderColor: {
        DEFAULT: "#e5e5e5",
      },
    },
  },
};
