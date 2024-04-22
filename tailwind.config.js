/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        maxWidth: "1440px",
      },
      colors: {
        bg: "#F2FFF5",
        primary: {
          red: "#DC2F39",
          "dark-green": "#32794F",
        },
        secondary: {
          "light-green": "#DDF7E3",
          "medium-green": "#BEEBC2",
        },
        black: {
          50: "#FFFFFF",
          100: "#252525",
          200: "#181818",
        },
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(200px, 1fr))",
        list: "repeat(auto-fit, minmax(200px, 500px))",
      },
    },
  },
  plugins: [],
};
