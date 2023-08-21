/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      translate: {'5': '-0.3125rem'}
    },
    fontFamily: {
     calistoga: ['Calistoga'],
     poppin: ['Poppins']
    },
  },
  plugins: [],
}

