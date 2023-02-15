/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arimo: "'Arimo', sans-serif",
      }
    },
    container:{
      center: true,
    },
    extend: {},
  },
  plugins: [],
}