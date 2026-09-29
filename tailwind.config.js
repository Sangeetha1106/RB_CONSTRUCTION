/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          offwhite: '#fcfbf9',
          surface: '#f5f3ef',
          charcoal: '#1c1917',
          muted: '#57534e',
          brown: '#3a2e2b',
          amber: '#b45309',
          amberHover: '#92400e',
          gold: '#c27803',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 30px -10px rgba(28, 25, 23, 0.08), 0 8px 10px -6px rgba(28, 25, 23, 0.04)',
      }
    },
  },
  plugins: [],
}
