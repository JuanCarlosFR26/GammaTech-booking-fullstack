/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        li: '#F1C27B',
        nav: '#A2CDB0',
        liHover: '#85A389',
      }
    },
  },
  plugins: [],
}