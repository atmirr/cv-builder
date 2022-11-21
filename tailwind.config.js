/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      "3xl": "0px 6px 50px rgba(0, 0, 0, 0.1)",
    },
    fontSize: {
      "3.5xl": "2rem",
    },
    gap: {
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
    },
    extend: {
      colors: {
        primary: "#F1B43E",
        secondary: "#FCFBF7",
        "black-800": "#323232",
        "black-500": "#727272",
        "black-300": "#A4A3A3",
        "black-100": "#E0DFDC",
      },
      spacing: {
        13: "3.25rem",
        19: "4.75rem",
      },
      borderRadius: {
        "rounded-3xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
