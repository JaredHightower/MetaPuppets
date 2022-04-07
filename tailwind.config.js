const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '390px', 'max': '767px' },
        '3xl': { 'min': '1537px', 'max': '1870' },
      },
      fontFamily: {
        'sans': ['Rajdhani', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-image': "url('/src/components/assets/Images/Banner.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      zIndex: {
        'negative': '-1',
      },
    },
  },
  plugins: [],
}
