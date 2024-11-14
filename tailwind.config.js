const { doomUI } = require('@doom-ui/core');
// const coreConfig = require('../packages/core/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/*/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  // presets: [coreConfig],
  darkMode: 'class',
  theme: {
    extend: {
      // Extend theme here if needed
    },
  },
  plugins: [
    doomUI({
      // Your doomUI configuration
    }),
  ],
}; 