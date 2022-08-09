/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#D4D4D4',
      pink: {
        light: '#ef51a5',
        DEFAULT: '#eb268f',
        dark: '#bc1e72',
      },
    },
    extend: {},
  },
  plugins: [],
}