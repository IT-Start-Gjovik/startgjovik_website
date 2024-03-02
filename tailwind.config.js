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
                darkblue: 'rgb(1, 26, 49)',
                'btn-primary': '#B2C51F',
                'btn-secondary': '#F5F5F5',
                'btn-secondary-dark': '#132D4E',
                'bg-primary': '#FFFFFF',
                'bg-primary-dark': '#132D4E',
                'text-primary': '#FFFFFF',
                'text-primary-dark': '#132D4E',
                'text-primary-black': '#000000',
            },
        },
    },
    plugins: [],
};
