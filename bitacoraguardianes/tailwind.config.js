/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/.{html}"],
  theme: {
    extend: {
      colors: {
        basicblue: "#30BCE8",
        customyellow: "#D0C457",
        custombg: `radial-gradient(
                                    rgba(0, 163, 255, 0.54) 0%,
                                    rgba(0, 163, 255, 0) 100%
                                  );`,
      },
    },
  },
  plugins: [],
};
