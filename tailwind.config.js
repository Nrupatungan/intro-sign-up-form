/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/app/js/script.js",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        Red: 'hsl(0, 100%, 74%)',
        Green: 'hsl(154, 59%, 51%)',
        
        // Accent
        Blue: 'hsl(248, 32%, 49%)',
        
        // Neutral
        Dark_Blue: 'hsl(249, 10%, 26%)',
        Grayish_Blue: 'hsl(246, 25%, 77%)',
      },
      
      backgroundImage: {
        'mobile': "url('/assets/images/bg-intro-mobile.png')",
        'desktop': "url('/assets/images/bg-intro-desktop.png')",
        'error-icon': "url('/assets/images/icon-error.svg')",
      },

      fontFamily: {
        Poppins: "'Poppins', sans-serif",
      },

      gridTemplateColumns: {
        '2_lg': 'repeat(2, minmax(auto, 650px))',
      },
    },
  },
  plugins: [],
}

