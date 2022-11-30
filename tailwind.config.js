/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      // sans: ['"Open Sans"', 'sans-serif']
      oakes: ['OakesGrotesk', 'sans-serif']
    },
    extend: {
      colors: {
        vinci: {
          light: '#bba3f5',
          DEFAULT: '#6d3af9',
          hover: '#7b4df9'
          // dark: '#6d3af9'
        }
      },
      fontFamily: { oakesMedium: ['OakesGroteskMedium', 'sans-serif'] }
    }
  },
  plugins: []
};
