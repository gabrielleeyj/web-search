module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'masthead': ['Lato'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
