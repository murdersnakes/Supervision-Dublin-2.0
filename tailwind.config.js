/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-font)"],
      },
      colors: {
        primary: "#078CC6",
        accent: "#BFFF00",
        dark: "#202020",
        medium: "#CECECE",
        light: "#E6E6E6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
