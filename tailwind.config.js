/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#382bf0',
          200: '#5e43f3',
          300: '#7a5af5',
          400: '#9171f8',
          500: '#a688fa',
          600: '#ba9ffb',
        },
        dark: {
          100: '#121212',
          200: '#282828',
          300: '#3f3f3f',
          400: '#575757',
          500: '#717171',
          600: '#8b8b8b',
        },
        mixed: {
          100: '#1a1625',
          200: '#2f2b3a',
          300: '#46424f',
          400: '#5e5a66',
          500: '#76737e',
          600: '#908d96',
        },
      },
      fontSize: {
        // Add your custom font sizes here
        'custom-h1': '40px',  // Custom size for h1
        'custom-h2': '32px',    // Custom size for h2
        'custom-h3': '24px',  // Custom size for h3
        'custom-h4': '20px', // Custom size for h4
        'custom-h5': '16px',    // Custom size for h5
        'custom-h6': '14px' // Custom size for h6
      },
    },
  },
  plugins: [],
}