/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        mandaMint: "#0BE0A3",
        mandaPurple: "#8A00F3",
        mandaGrey: "#D9D9D9"
      },
      fontFamily: {
        konexy: ["Konexy", "sans-serif"],
        zendots: ["Zen Dots", "sans-serif"],
        goldman: ["Goldman", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        veryWidest: '1.0em',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};