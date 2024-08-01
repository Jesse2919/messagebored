/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   screens: {
    "2xsm": "390px",
    xsm: "500px",
    xmd: "880px",
   },
  },
 },
 plugins: [],
};
