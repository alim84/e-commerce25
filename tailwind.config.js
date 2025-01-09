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
        poppins: ['Poppins', 'serif', 'Ubuntu'],
        bangla: ['Tiro Bangla', 'serif'],
      
      },
      container: {
        center: true,
        screens:{
          xl:"1170px"
        }
      },
    },
  },
  plugins: [],

 

 

});