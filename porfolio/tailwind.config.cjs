/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],

  theme: {
    extend: {
      /* --- COLORES --- */
      colors: {
        dark: "#151515",
        "grey-dark": "#242424",
        whiteLike: "#D9D9D9",
        accent: "#4EE1A0",
        accentHover: "#66E2DC",
      },

      /* --- FONT FAMILY --- */
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },

  plugins: [],
}