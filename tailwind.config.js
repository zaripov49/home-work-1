/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg' : '992px',
        'xl' : '1280px',
        '2xl' : '1500px',
      }
    },
  },
  plugins: [],
}