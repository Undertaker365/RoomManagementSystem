/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.xian",
    "./public/**/*.js", // Assuming some JS might interact with classes
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#2C5D2B',
        'gold': '#F4B400',
        'light-green': '#76A743',
        'earth-brown': '#7B4F2A',
        'sky-blue': '#4FA9E2',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
}
