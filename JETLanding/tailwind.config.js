/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["HelveticaNeue", "sans"],
        accent: ["HeadingNow", "sans"],
      },
      colors: {
        accent: "var(--clr-accent)",
        dark: "var(--clr-dark)",
        hover: "var(--clr-hover)",
        light: "var(--clr-light)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      huge: "1700px",
    },
    animation: {
      float: "floating 2s ease-in-out infinite",
      rotate: "rotate-center 30s linear infinite",
      slide: "slide 2s ease-in-out infinite",
    },
  },
  plugins: ["flowbrite/plugin"],
};
