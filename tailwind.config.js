/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'epilogue': ['Epilogue', 'system-ui', '-apple-system', 'sans-serif'],
        'sans': ['Epilogue', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundColor: {
        'custom-white': '#FFFFFC',
      },
    },
  },
  plugins: [],
}

