/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': 'rgb(0, 77, 123)',
        'gradient-mid': 'rgb(1, 22, 43)',
        'gradient-end': 'rgb(194, 217, 239)',
      },
    },
  },
  plugins: [],
}
