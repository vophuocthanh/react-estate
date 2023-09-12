/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Open Sans', 'sans-serif'],
      },
      colors: {
        CTA_2: '#1C3988',
        lightGray: '#F3F3FA',
        lightGray2: '#DADAEE',
        textColor: '#141B2D',
        darkBlue: '#091638',
        whiteCustom: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
