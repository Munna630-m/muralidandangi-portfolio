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
        dark: {
          950: '#060608',
          900: '#0C0C10',
          850: '#121217',
          800: '#181820',
          750: '#20202A',
          700: '#282834',
          600: '#38384A',
          500: '#525266',
        },
        accent: {
          DEFAULT: '#FF5436', // Vibrant coral/orange accent matching reference design
          hover: '#FF6B50',
          glow: 'rgba(255, 84, 54, 0.4)',
          subtle: 'rgba(255, 84, 54, 0.12)',
          dark: '#E03D1F',
        },
        surface: {
          glass: 'rgba(18, 18, 24, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 84, 54, 0.3)',
          card: '#121217',
          hover: '#191922',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        }
      }
    },
  },
  plugins: [],
}
