/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,}",
    "./src/*.{vue,js,}",
    "./src/*.vue",
    "./**.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', "sans-serif"]
      }
    },
  },
  plugins: [],
}