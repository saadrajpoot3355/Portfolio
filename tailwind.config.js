/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Kanit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        hero: '#080a11',
        background: '#0a0c14',
        secondary: '#111522',
        border: 'rgba(255, 255, 255, 0.1)',
        'border-hover': 'rgba(255, 255, 255, 0.25)',
        'accent-ink': '#3b82f6',
        'accent-purple': '#8b5cf6',
        foreground: '#f8fafc',
        'muted-foreground': '#94a3b8',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
