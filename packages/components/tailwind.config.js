const { doomUI } = require('@doom-ui/core');
const coreConfig = require('../core/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [coreConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // Component-specific theme extensions
    },
  },
  plugins: [
    doomUI({
      // Component-specific doomUI configuration
    }),
  ],
};
