/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#1f2937',
      },
    },
  },
  plugins: [require("daisyui")],
}

