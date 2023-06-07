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
      'purple': '#50628D',
      'red': '#880505'
    },
    extend: {},
  },
  plugins: [],
}