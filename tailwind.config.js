/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Tb:["Montserret","Karla"],
        nav:["Roboto"],
        barlow:["Barlow"]
      }
    },
  },
  plugins: [],
}