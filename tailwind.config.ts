/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy, from the "Mission" wordmark and icon in the logo.
        primary: {
          50: '#eef3fa',
          100: '#d4e0f0',
          200: '#a9c1e0',
          300: '#7ea2d0',
          400: '#4f7ab5',
          500: '#2f5a99',
          600: '#1c4178',
          700: '#10305f',
          800: '#0b2348',
          900: '#071730',
        },
        // Maroon, from the "Vision" wordmark and icon in the logo.
        secondary: {
          50: '#fbeef1',
          100: '#f3d2da',
          200: '#e3a5b3',
          300: '#cf7890',
          400: '#a84d64',
          500: '#7c2f47',
          600: '#601830',
          700: '#4a1226',
          800: '#350d1b',
          900: '#230811',
        },
        // Gold, from "to" and the tagline underline in the logo.
        accent: '#b8862a',
        cream: '#f7f7f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
