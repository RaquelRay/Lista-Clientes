/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1e3c72",
        secondary: "#2a5298",
        accent: "#28a745",
      },
      fontFamily: {
        // Define Inter como fonte padrão para 'sans'
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        
      },
    },
  },
  plugins: [],
};
