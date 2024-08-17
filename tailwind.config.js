/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true,
        screens: {
          lg: "1330px",
        },
      },
      colors: {
        primary: "#3f51b5",
      },
    },
  },
  plugins: [],
};
