
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif']
      },
      colors: {
        'orange': 'hsl(35, 77%, 62%)',
        'red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'blue': 'hsl(233, 8%, 79%)',
        'gray-blue': 'hsl(236, 13%, 42%)',
        'dark-blue': 'hsl(240, 100%, 5%)'
      }
    },
  },
  
  plugins: [],
}