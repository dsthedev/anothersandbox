/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        avatar: '6px',
      },
      colors: {
        acadia: '#392f2d' /* brown */,
        blackPearl: '#071126' /* navy blue */,
        bombay: '#aeaeae' /* light gray */,
        cognac: '#9a360e' /* dark red */,
        countyGreen: '#003d19' /* darkest green */,
        cruseo: '#0a5d2c' /* dark green */,
        fireEngineRed: '#c52425' /* dark red */,
        nileBlue: '#243853' /* blue */,
        orangeRed: '#ff4600' /* red / error */,
        padua: '#b1e3cc' /* lightest green - placeholder color */,
        pastelMagenta: '#ff9dbf' /* pink */,
        scotchMist: '#efe9cb' /* light brown */,
        silverTree: '#70bd91' /* light green */,
        spanishGreen: '#008a52' /* medium green */,
        spicyMustard: '#6e5a0d' /* dark yellow */,
        supernova: '#fac900' /* yellow / warning */,
        turquoiseGreen: '#a0ccb7' /* very light green */,
        vistaBlue: '#94d1b4' /* light green - placeholder color */,
        badass: {
          50: '#f9fce9',
          100: '#f1f8cf',
          200: '#e1f1a5',
          300: '#cbe670',
          400: '#bada55',
          DEFAULT: '#bada55',
          500: '#96bc26',
          600: '#74961a',
          700: '#587219',
          800: '#475b19',
          900: '#3d4d1a',
          950: '#1f2a09',
        },
      },
      width: {
        18: '72px',
      },
      height: {
        18: '72px',
      },
    },
    fontFamily: {
      condensed: ['Bebas Neue', 'sans-serif'],
      handwriting: ['Kalam', 'cursive'],
      sans: ['Inter', 'sans-serif'],
      script: ['Agbalumo', 'cursive'],
    },
  },
  plugins: [],
}
