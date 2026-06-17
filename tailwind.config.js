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
        // Custom premium palette: Slate + Indigo + Violet/Rose
        darkBg: '#030712',          // Main dark background (slate-950)
        darkBgSecondary: '#0b0f19', // Secondary dark background (indigo-slate)
        darkCard: '#0f172a',        // Dark card background (slate-900)
        darkBorder: 'rgba(99, 102, 241, 0.08)', // Indigo border glow
        
        lightBg: '#f8fafc',         // Main light background (slate-50)
        lightBgSecondary: '#f1f5f9',// Secondary light background (slate-100)
        lightCard: '#ffffff',       // Light card background
        lightBorder: 'rgba(99, 102, 241, 0.05)', // Subtle light border
        
        accent: {
          indigo: '#6366f1',        // Cyber Indigo
          indigoGlow: 'rgba(99, 102, 241, 0.15)',
          violet: '#d946ef',        // Royal Violet
          violetGlow: 'rgba(217, 70, 239, 0.15)',
          rose: '#f43f5e',          // Electric Rose
          roseGlow: 'rgba(244, 63, 94, 0.15)',
          cyan: '#06b6d4',          // Electric Cyan
        },
        
        textDark: '#f3f4f6',        // Primary text dark mode (slate-100)
        textDarkMuted: '#9ca3af',   // Secondary text dark mode (slate-400)
        textLight: '#0f172a',       // Primary text light mode (slate-900)
        textLightMuted: '#475569',  // Secondary text light mode (slate-600)
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        heading: ['Outfit'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
