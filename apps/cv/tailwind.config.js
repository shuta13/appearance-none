const { fontFamily, spacing, fontSize } = require('tailwindcss/defaultTheme');

// spacingとfont sizeはpxで管理する。
const SPACING = [
  0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 42,
  44, 48, 56, 60, 64, 74, 75, 80, 90, 96, 104, 108, 112, 128, 144, 160, 176,
  184, 192, 200, 208, 224, 240, 256, 288, 320, 384,
];
const FONT_SIZE = [
  11, 12, 13, 14, 15, 16, 18, 20, 24, 25, 28, 30, 32, 34, 36, 40, 44, 48, 54,
  60, 72, 96, 116, 128,
];
const createConfig = (array) =>
  array.reduce((config, spacing) => {
    config[spacing] = `${spacing}px`;
    return config;
  }, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans)', ...fontFamily.sans],
        mono: ['var(--font-courier-prime)', ...fontFamily.mono],
      },
      colors: {
        primary: 'var(--theme-color-primary)',
        secondary: 'var(--theme-color-secondary)',
        'accent-green': 'var(--accent-green)',
        'accent-pink': 'var(--accent-pink)',
      },
      maxWidth: {
        media: '800px',
      },
      spacing: {
        ...spacing,
        ...createConfig(SPACING),
      },
      fontSize: {
        ...fontSize,
        ...createConfig(FONT_SIZE),
      },
      gridTemplateColumns: {
        main: '1fr min(768px, calc(100% - 32px)) 1fr',
      },
    },
  },
  plugins: [require('tailwind-children')],
};
