/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        foreground: '#ffffff',
        primary: '#1f1f1f',
        secondary: '#2a2a2a',
        accent: '#646cff',
      },
    },
  },
  plugins: [],
};
