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
        'primary': '#3b82f6',
        'secondary': '#9FA6B2',
        'success': '#14A44D',
        'danger': '#DC4C64',
        'warning': '#E4A11B',
        'info': '#54B4D3',
        'light': '#F9FAFB',
        'dark': '#1F2937',
      },
    },
  },
  plugins: [],
}
