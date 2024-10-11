import { button } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        athelas: ['Athelas', 'serif'], // Adding 'Athelas' font
      },
      colors:{
        backGround:"#212D2D",
        button:"#9E9E9E"
      }
    },
  },
  plugins: [],
}

