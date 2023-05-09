/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      content: {
        'close': 'url("../public/Images/close.svg")',
      },
      colors: {
        'postBtn-default': '#f0f8ff80',
        'postBtn-hover': '#e4fffe80',
      },
    },
  },
  plugins: [],
}
