/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        screens: {
            'sml': { 'max': '640px' },

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            sm: ['16px', '20px'],
            base: ['20px', '24px'],
            lg: ['20px', '28px'],
            xl: ['24px', '32px'],
        },
        extend: {},
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}