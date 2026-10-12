/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4FA',
          100: '#D9E3F3',
          200: '#B3C8E6',
          300: '#8DAED8',
          400: '#4D80C0',
          500: '#1D5A9C',
          600: '#134377',
          700: '#0F345D',
          800: '#0E294A',
          900: '#0B1F3A', // Brand Deep Navy
          950: '#061325', // Dark Hero / Footer Navy
        },
        brand: {
          orange: '#FF7A1A', // Brand Accent Orange
          'orange-hover': '#E86609',
          'orange-light': '#FFF5EE',
          teal: '#0EA5E9',
          'teal-dark': '#0284C7',
          gold: '#F59E0B',
          surface: '#F8FAFC',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(11, 31, 58, 0.07)',
        'glow': '0 0 30px -5px rgba(255, 122, 26, 0.35)',
        'card': '0 4px 20px -2px rgba(11, 31, 58, 0.05), 0 2px 6px -1px rgba(11, 31, 58, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(11, 31, 58, 0.12), 0 8px 16px -4px rgba(11, 31, 58, 0.05)',
        'mega': '0 25px 50px -12px rgba(11, 31, 58, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
