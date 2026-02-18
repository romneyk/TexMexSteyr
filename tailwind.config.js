/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                texmex: {
                    red: '#D32F2F',
                    redDark: '#B71C1C',
                    orange: '#FB8C00',
                    black: '#0a0a0a',
                    dark: '#171717',
                    card: '#1F1F1F',
                    text: '#E0E0E0',
                }
            },
            fontFamily: {
                sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
                display: ['Impact', 'Arial Black', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'ken-burns': 'kenBurns 20s infinite alternate',
                'fade-in': 'fadeIn 1s ease-out',
                'float-slow': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                kenBurns: {
                    '0%': { transform: 'scale(1.0)' },
                    '100%': { transform: 'scale(1.15)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
