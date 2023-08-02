/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    colors: {},
    extend: {
      colors: {
        blue: {
          card: '#21272C',
          container: '#1D2125',
          column: '#161A1D'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
