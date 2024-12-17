/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FAFAFA',
        background: '#F5F5F5',
        black: '#0A0A0A',
        primary: {
          DEFAULT: '#E07A5F',
          foreground: '#FAFAFA',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
