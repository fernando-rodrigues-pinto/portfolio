/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f6f3',
          100: '#ede9e0',
          200: '#d9d0bc',
          300: '#c2b398',
          400: '#a89070',
          500: '#8f7355',
          600: '#735c43',
          700: '#5a4633',
          800: '#3d2f22',
          900: '#221a12',
          950: '#110d09',
        },
        rust: {
          400: '#e87040',
          500: '#d4562a',
          600: '#b8441f',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
