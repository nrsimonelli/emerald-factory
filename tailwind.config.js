const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        lighter: colors.violet['400'], // emerald 400
        DEFAULT: colors.violet['500'], // emerald 500
        darker: colors.violet['600'], // emerald 600
      },
      dkPrimary: {
        lighter: colors.emerald['300'], // emerald 300
        DEFAULT: colors.emerald['400'], // emerald 400
        darker: colors.emerald['500'], // emerald 500
      },
      secondary: {
        lighter: '#34D399', // emerald 400
        DEFAULT: '#10B981', // emerald 500
        darker: '#059669', // emerald 600
      },
      dkSecondary: {
        lighter: '#6EE7B7', // emerald 300
        DEFAULT: '#34D399', // emerald 400
        darker: '#10B981', // emerald 500
      },
      accent: {
        lighter: '#34D399', // emerald 400
        DEFAULT: '#10B981', // emerald 500
        darker: '#059669', // emerald 600
      },
      dkAccent: {
        lighter: '#6EE7B7', // emerald 300
        DEFAULT: '#34D399', // emerald 400
        darker: '#10B981', // emerald 500
      },

      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      black: colors.black,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
