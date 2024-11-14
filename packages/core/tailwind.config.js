import { doomUI } from '@plugins';

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
