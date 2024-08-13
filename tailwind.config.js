/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: { 
         blob: 'blob 4s infinite',
         float: 'float 4s ease-in-out infinite',
         'fill': 'fill 2s ease-in-out forwards',
      },
      keyframes: {
        blob: {
          "0%": {
            // apply filter and blur to zero
            filter: "blur(3px)",
            transform: 'scale(0.8)',
          },
          "50%": {
            // apply filter and blur to 2
            filter: "blur(0)",
            transform: 'scale(1)',
          },
          "100%": {
            // apply filter and blur to zero
            filter: "blur(3px)",
            transform: 'scale(0.8)',
          },
          },
          float: {
            '0%, 100%': { letterSpacing: '0.05em', transform: 'translateY(0) translateX(0) skew(0deg)' },
            '50%': { letterSpacing: '0.12em', transform: 'translateY(0) translateX(0) skew(0deg)' },
          },
          fill: {
            '0%': { strokeDashoffset: '251.2' },
            '100%': { strokeDashoffset: 'var(--final-value)' },
          },
        },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif']
      },
      colors: {
        primary:{
          100: '#00df9a',
          200: '#00ffae',
        },
        "grey-5": "#0f0f0f",
        "grey-25": "#3e3e41",
        "grey-10": "#18181a",
        "grey-45": "#6e6e73",
        "grey-60": "#959599",
        "grey-75": "#c1c1be",
        "grey-90": "#e5e5e6",
        }
      }
    },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}