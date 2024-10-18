/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './web-resources/*.js'
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1c8a7f',
        secondary: '#81d8d0',
      }, 
      screens:{
        tablet: '640px', 

        laptop: '1024px'
      }
    },
  },
  plugins: [],
}

