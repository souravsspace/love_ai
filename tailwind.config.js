/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#04ddb2",
      white: "#fff",
      black: "#333",
      gray: "#767676",
    },
  },
  plugins: [],
});
