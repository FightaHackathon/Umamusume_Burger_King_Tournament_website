import tailwindcss from '@tailwindcss/postcss'

/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode as defined in your HTML script
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        // Sets M PLUS Rounded 1c as the default sans font
        sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      colors: {
        'uma-green': '#4CAF50',
        'uma-dark-green': '#2E7D32',
        'uma-yellow': '#FFEB3B',
        'uma-gold': '#FFC107',
        'uma-brown': '#5D4037',
        'uma-light-green': '#C8E6C9',
        'uma-bg': '#F1F8E9',
        'uma-bg-dark': '#1a291a',
        'uma-bg-dark-secondary': '#253825',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-bright': 'pulseBright 1.5s infinite',
        'zoom-in': 'zoomIn 0.3s ease-out forwards',
        'text-highlight-pulse': 'textHighlightPulse 1.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseBright: {
          '0%, 100%': { filter: 'brightness(1)', transform: 'scale(1)' },
          '50%': { filter: 'brightness(1.1)', transform: 'scale(1.05)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        textHighlightPulse: {
          '0%': { textShadow: '0 0 0px rgba(255, 235, 59, 0)' },
          '50%': { textShadow: '0 0 12px rgba(255, 235, 59, 0.8)' },
          '100%': { textShadow: '0 0 0px rgba(255, 235, 59, 0)' },
        },
      },
    },
  },
  
  plugins: [
    tailwindcss
  ],
}