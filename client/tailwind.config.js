/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#1D2A40',
      'white': '#FFFFFF',
      'purple': '#5b6981',
      'red': '#880505',
      'gray': '#9799a1'
    },
    extend: {},
  },
  plugins: [],
}