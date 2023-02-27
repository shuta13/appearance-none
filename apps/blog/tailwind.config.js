const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans-pro)', ...fontFamily.sans],
        mono: ['var(--font-courier-prime)', ...fontFamily.mono],
      },
      colors: {
        primary: 'var(--theme-color-primary)',
        secondary: 'var(--theme-color-secondary)',
      },
      maxWidth: {
        media: '800px',
      },
    },
  },
  plugins: [require('tailwind-children')],
};