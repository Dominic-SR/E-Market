/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dccef",
        brandBlue: '#1376f4',
        brandWhite: "#eeeeee",
      }
    },
  },  
  plugins: [],
}

