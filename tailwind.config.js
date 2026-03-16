/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7F5AF0',
        secondary: '#00FFD1',
        dark: {
          DEFAULT: '#0F0F0F',
          100: '#121212',
          200: '#1A1A1A',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        neon: {
          purple: '#7F5AF0',
          blue: '#2D9CDB',
          cyan: '#00FFD1',
          pink: '#FF49DB'
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 8s linear infinite',
        'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
        'matrix-fade': 'matrixFade 2.5s ease-out forwards',
        'glitch': 'glitch 1s infinite',
        'scan-line': 'scanLine 2s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(127, 90, 240, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(127, 90, 240, 0.1) 1px, transparent 1px)',
        'circuit': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L54 42 L48 42 M42 54 L48 54 L48 48 M6 12 L6 18 L12 18 M18 6 L12 6 L12 12' stroke='rgba(127, 90, 240, 0.1)' fill='none'/%3E%3C/svg%3E\")"
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};