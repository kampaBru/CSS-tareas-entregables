/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.html"],
  theme: {
    extend: {},
  },
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
        popins: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },

  plugins: [],
};