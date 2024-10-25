/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#7da640',
      },
    },
  },
  plugins: [],
}
