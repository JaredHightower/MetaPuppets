const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
