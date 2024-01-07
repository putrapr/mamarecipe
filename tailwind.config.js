/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['"Airbnb"', 'sans-serif']
      },
    extend: {
      colors: {
        primary: '#EFC81A'
      },
      width: {
        '3/10': '30%'
      }
    },
  },
  plugins: [],
}

