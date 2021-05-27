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
      whiteFade: {
        light: '#f5f7fa',
        dark: '#c3cfe2',
      },
      blackFade: {
        light: '#434343',
        dark: '#000000',
      },

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

      betaMin: {
        major: colors.lightBlue['400'],
        DEFAULT: colors.lightBlue['500'],
        minor: colors.lightBlue['600'],
        mid: colors.lightBlue['700'],
      },
      beta: {
        major: colors.blue['400'],
        DEFAULT: colors.blue['500'],
        minor: colors.blue['600'],
        mid: colors.blue['700'],
      },
      betaMax: {
        major: colors.indigo['400'],
        DEFAULT: colors.indigo['500'],
        minor: colors.indigo['600'],
        mid: colors.indigo['700'],
      },

      darkBetaMin: {
        major: colors.lightBlue['300'],
        DEFAULT: colors.lightBlue['400'],
        minor: colors.lightBlue['500'],
        mid: colors.lightBlue['600'],
      },
      darkBeta: {
        major: colors.blue['300'],
        DEFAULT: colors.blue['400'],
        minor: colors.blue['500'],
        mid: colors.blue['600'],
      },
      darkBetaMax: {
        major: colors.indigo['300'],
        DEFAULT: colors.indigo['400'],
        minor: colors.indigo['500'],
        mid: colors.indigo['600'],
      },

      gamma: {
        major: colors.red['400'],
        DEFAULT: colors.red['500'],
        minor: colors.red['600'],
        mid: colors.red['700'],
      },
      darkGamma: {
        major: colors.red['300'],
        DEFAULT: colors.red['400'],
        minor: colors.red['500'],
        mid: colors.red['600'],
      },

      positive: {
        major: colors.green['400'],
        DEFAULT: colors.green['500'],
        minor: colors.green['600'],
        mid: colors.green['700'],
      },
      darkPositive: {
        major: colors.green['300'],
        DEFAULT: colors.green['400'],
        minor: colors.green['500'],
        mid: colors.green['600'],
      },
      negative: {
        major: colors.red['400'],
        DEFAULT: colors.red['500'],
        minor: colors.red['600'],
        mid: colors.red['700'],
      },
      darkNegative: {
        major: colors.red['300'],
        DEFAULT: colors.red['400'],
        minor: colors.red['500'],
        mid: colors.red['600'],
      },
      warning: {
        major: colors.yellow['400'],
        DEFAULT: colors.yellow['500'],
        minor: colors.yellow['600'],
        mid: colors.yellow['700'],
      },
      darkWarning: {
        major: colors.yellow['300'],
        DEFAULT: colors.yellow['400'],
        minor: colors.yellow['500'],
        mid: colors.yellow['600'],
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
