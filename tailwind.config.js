/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      roboto: ['Roboto'],
      'roboto-mono': ['Roboto Mono']
    },
    extend: {
      colors: {
        blue: {
          card: '#21272C',
          container: '#1D2125',
          column: '#161A1D',
          primary: '#0F4C5C',
          panel: '#282e33'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
