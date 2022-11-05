/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [
    "rotate-45",
    "-rotate-45",
    "translate-y-2",
    "opacity-0",
    "-rotate-45",
    "-translate-y-2",
  ],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#2B2D42",
        secondary: "#8D99AE",
        tertiarty: "#EDF2F4",
        cta: "#EF233C",
        cta2: "#D80032",
      },
    },
  },
  plugins: [],
};
