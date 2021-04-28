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

      alpha: {
        pure: colors.white,
        major: colors.coolGray['100'],
        DEFAULT: colors.coolGray['200'],
        minor: colors.coolGray['300'],
        mid: colors.coolGray['400'],
        neutral: colors.coolGray['500'],
      },
      darkAlpha: {
        pure: colors.black,
        major: colors.coolGray['900'],
        DEFAULT: colors.coolGray['800'],
        minor: colors.coolGray['700'],
        mid: colors.coolGray['600'],
        neutral: colors.coolGray['500'],
      },
      beta: {
        major: colors.gray['400'],
        DEFAULT: colors.gray['500'],
        minor: colors.gray['600'],
      },
      betaMax: {
        major: colors.warmGray['400'],
        DEFAULT: colors.warmGray['500'],
        minor: colors.warmGray['600'],
      },
      betaMin: {
        major: colors.blueGray['400'],
        DEFAULT: colors.blueGray['500'],
        minor: colors.blueGray['600'],
      },
      darkBeta: {
        major: colors.gray['300'],
        DEFAULT: colors.gray['400'],
        minor: colors.gray['500'],
      },
      darkBetaMax: {
        major: colors.warmGray['300'],
        DEFAULT: colors.warmGray['400'],
        minor: colors.warmGray['500'],
      },
      darkBetaMin: {
        major: colors.blueGray['300'],
        DEFAULT: colors.blueGray['400'],
        minor: colors.blueGray['500'],
      },
      gamma: {
        major: colors.yellow['400'],
        DEFAULT: colors.yellow['500'],
        minor: colors.yellow['600'],
      },
      darkGamma: {
        major: colors.amber['300'],
        DEFAULT: colors.amber['400'],
        minor: colors.amber['500'],
      },

      warmGray: colors.warmGray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
      trueGray: colors.trueGray,
      gray: colors.gray,
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
