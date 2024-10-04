/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xsm': '0.6rem'
      },
      lineHeight: {
        'xsm': '0.8rem'
      }
    },
  },
  plugins: [],
}

