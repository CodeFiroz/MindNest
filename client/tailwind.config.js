/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
  {
    pattern: /bg-(red|blue|green|amber)-(100|200|300)/,
  },
],
  theme: {
    extend: {
       fontFamily: {
        sans: ["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  
}

