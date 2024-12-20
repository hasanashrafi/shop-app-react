/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: {
        100: "#d5d8dc",
        200: "#abb2b9",
        300: "#808b96",
        400: "#566573",
        500: "#2c3e50",
        600: "#233240",
        700: "#1a2530",
        800: "#121920",
        900: "#090c10"
      },
      green: {
        100: "#d6e4d4",
        200: "#aec9a9",
        300: "#85af7e",
        400: "#5d9453",
        500: "#347928",
        600: "#2a6120",
        700: "#1f4918",
        800: "#153010",
        900: "#0a1808"
      },
      blue: {
        100: "#d5d8e6",
        200: "#abb2cc",
        300: "#808bb3",
        400: "#566599",
        500: "#2c3e80",
        600: "#233266",
        700: "#1a254d",
        800: "#121933",
        900: "#090c1a"
      },
      primary: '#233266',
      secondary: '#C0EBA6',
      dark: '#2c3e50',
      light: '#FFFBE6',
      error: {
        100: "#ffcccc",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff3333",
        500: "#ff0000",
        600: "#cc0000",
        700: "#990000",
        800: "#660000",
        900: "#330000"
      },
      background: "#e9f9f9",
      rate: "#fde047",
    }
  },
  plugins: [],
}