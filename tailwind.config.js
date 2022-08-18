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
      gray: '#b2b2b2',
      brand: {
        light: '#339ac0',
        DEFAULT: '#0081B0',
        dark: '#00678d',
      },
    },
    screens: {
      tab: '801px'
    },
    fontFamily: {
      Oswald: ['Oswald', 'sans-serif'],
      poppins: ['poppins', 'sans-serif']
    },
    extend: {
      aspectRatio: {
        'h-image': '3/4'
      }
    },
  },
  plugins: [],
}