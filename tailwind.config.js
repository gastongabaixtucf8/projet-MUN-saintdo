/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0e1f42',
        navy: '#2a5298',
        'navy-mid': '#3f6cb5',
        'navy-light': '#5e88d0',
        gold: '#c9a84c',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
