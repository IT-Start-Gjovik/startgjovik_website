/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'phone': {'min': '20px', 'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'desktop': {'min': '1024px', 'max': '1279px'},
      'XLdesktop': {'min': '1280px'},
    },
    extend: {
      colors: {
        'gradient-start': 'rgb(0, 77, 123)',
        'gradient-mid': 'rgb(1, 22, 43)',
        'gradient-end': 'rgb(194, 217, 239)',
        'darkblue': 'rgb(1, 26, 49)',
      },
    },
  },
  plugins: [],
}
