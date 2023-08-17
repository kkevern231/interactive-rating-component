/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      phone: "640px",
      // => @media (min-width: 640px) { ... }

      desktop: "768px",
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      colors: {
        white: "#ffffff",
        "light-grey": "#959eac",
        "medium-grey": "#7c8798",
        "dark-blue": "#252d37",
        "very-dark-blue": "#121417",
        oggy: "#fb7413",
      },

      borderRadius: { xl: "1rem", full: "100%" },
    },
  },
  plugins: [],
};
