/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Deep Navy
        accent: "#d4af37",  // Divine Gold
        warmWhite: "#fafaf9",
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
