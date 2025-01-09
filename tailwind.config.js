/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        'primary': '#0f766e',
        'primaryWhite': '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Nunito', 'serif'],
        bangla: ['Tiro Bangla', 'serif'],
      
      },
      container: {
        center: true,
        screens:{
          sm:"600px",
          md:"720px",
          lg:"1320px",
          "2xl":"1400px"
        }
      },
    },
  },
  plugins: [],

 

 

});