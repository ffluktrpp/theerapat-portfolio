/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#FFDD95",
        primaryContent: "#19376D",
        primarySubContent: "#576CBC",
        primaryBase: "#E9F6FF",
        primaryAccent: "#19376D",
        primaryBg: "#0B2447",
        secondaryBg: "#A5D7E8",
      }
    },
  },
  plugins: [],
}

