/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      animation:{
        'bounce': 'bounce 5s linear infinite'},
    },
    fontFamily: {
      Gelasio: ['Gelasio', 'serif'],
      Inter:['Inter', 'sans-serif']

     },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '7rem',
      },
    },},
  plugins: [
    require('@tailwindcss/line-clamp'),

  ],
}
