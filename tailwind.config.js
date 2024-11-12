const { doomUI } = require('./src/plugins/doomui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    // extend: {
    //   keyframes: {
    //     wiggle: {
    //       "0%, 100%": { transform: "rotate(-3deg)" },
    //       "50%": { transform: "rotate(3deg)" },
    //     },
    //     shake: {
    //       "0%, 100%": { transform: "translateX(0)" },
    //       "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
    //       "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
    //     },
    //     float: {
    //       "0%, 100%": { transform: "translateY(0)" },
    //       "50%": { transform: "translateY(-10px)" },
    //     },
    //     jello: {
    //       "0%, 100%": { transform: "scale(1, 1)" },
    //       "25%, 75%": { transform: "scale(0.9, 1.1)" },
    //       "50%, 100%": { transform: "scale(1.1, 0.9)" },
    //     },
    //     swing: {
    //       "0%, 100%": { transform: "rotate(0deg)" },
    //       "50%": { transform: "rotate(10deg)" },
    //     },
    //   },
    //   animation: {
    //     wiggle: "wiggle 1s ease-in-out infinite",
    //     shake: "shake 1s ease-in-out infinite",
    //     float: "float 1s ease-in-out infinite",
    //     // jello: "jello 1s ease-in-out infinite",
    //     swing: "swing 1s ease-in-out infinite",
    //   },
    // },
  },
  plugins: [
    doomUI({
      // colors: {
      //   primary: {
      //     600: '#2563eb',
      //     700: '#1d4ed8',
      //   },
      // },
      // radius: {
      //   medium: '0.5rem',
      // },
    }),
  ],
};
