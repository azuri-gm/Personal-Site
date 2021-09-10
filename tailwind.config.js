module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1c2b35',
        'custom-grey': '#ECF8FF',
        'custom-green': '#B0FBBC',
        'darker-blue': '#111A20',
        'shade-blue': '#5e8ca7',
      },
      dropShadow: {
        '3xl': '0px 0px 76px rgba(188, 251, 195, 0.3)',
      },
      fontFamily: {
        jost: ['Jost'],
      },
      textShadow: {
        custom: '0px 0px 76px rgba(188, 251, 195, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
  ],
};
