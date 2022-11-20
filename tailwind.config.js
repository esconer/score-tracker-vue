/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#1e6ee5',
        'my-green': '#058337',

      }
    },

  },

  plugins: [],
}
