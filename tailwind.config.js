/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
        red: "hsl(0, 87%, 67%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
      },
      fontFamily: {
        sans: ["Poppins", "snas-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};
