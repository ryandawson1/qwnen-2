/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e3ebe3',
          200: '#c8d8c8',
          300: '#a5bfa5',
          400: '#82a382',
          500: '#6b8d6b',
          600: '#547054',
          700: '#455c45',
          800: '#3a4a3a',
          900: '#323f32',
        },
        cream: {
          50: '#fefdf9',
          100: '#fdfbf3',
          200: '#faf7e6',
          300: '#f5f0d3',
          400: '#ede6ba',
          500: '#e3dba0',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
}

