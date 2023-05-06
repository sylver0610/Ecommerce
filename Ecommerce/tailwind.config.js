/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tiki: '#0060ff',
        subTitle: 'rgb(56, 56, 61)',
        tikiText: 'rgb(128, 128, 137)',
        tikiGray: '#dddde3',
        itemHoverActive: 'rgba(0, 96, 255, 0.12)',
        itemHover: 'rgba(39, 39, 42, 0.12)'
      },
      lineHeight: {
        'extra': '150%'
      }
    },
  },
  plugins: [],
}