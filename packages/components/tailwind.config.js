const { doomUI } = require('@doom-ui/core');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    doomUI(),
  ],
};
