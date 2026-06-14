/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ss-navy': '#0d2d4a',
        'ss-steel': '#1a5276',
        'ss-teal': '#0e7490',
        'ss-aqua': '#a8d8ea',
        'ss-cyan': '#00e5ff',
        'ss-mint': '#00ffcc',
        'ss-coral': '#ff6b6b',
        'ss-gold': '#ffd700',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'deep-ocean': 'linear-gradient(to bottom, #0a0e27, #020812)',
      }
    },
  },
  plugins: [],
}
