/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/.{html}"],
  theme: {
    extend: {
      colors: {
        "basicblue": "#30BCE8",
        "customyellow": "#D0C457",
      },
    },
  },
  plugins: [],
};
