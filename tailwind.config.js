/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  daisyui: {
    themes: ["wireframe", "black"],
  },
  theme: {
    fontFamily: {
      display: ['Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
