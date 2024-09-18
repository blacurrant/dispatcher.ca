/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        primary: "#723D9E",
        secondary: "#ECE6F0",
        faded:"#212121"
      },
    },
  },
  plugins: [],
};
