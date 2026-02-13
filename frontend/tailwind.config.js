/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'marquee':'marquee 20s linear infinite',
      },
      keyframes: {
        marquee:{
          '0%': { transform:'traslateX(100%'},
          '100%':{transform: 'traslateX(-100)'}
        }
      }
    },
  },
  plugins: [],
}
