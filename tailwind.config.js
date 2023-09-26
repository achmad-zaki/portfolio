/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html", "./src/js/**/*.js"],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#fa4529',
      }
    },
  },
  plugins: [],
}