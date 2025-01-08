/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        'blackColor': '#000000',
        'whiteColor': '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
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