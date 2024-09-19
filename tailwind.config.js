/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg":
          "url('https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
      fontSize: {
        "custom-xl": "1.25rem",
        "custom-lg": "1.125rem",
        "custom-sm": "0.875rem",
      },
      // screens: {
      //   mobile: { min: "425px" },
      //   tablet: { min: "768px" },
      //   laptop: { min: "1024px" },
      // },
      keyframes: {
        first_animate_bg: {
          "0%, 100%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
          },
          "50%": {
            transform: "translate3d(-180px, 90px, 0px) rotate(-90deg)",
          },
        },
        second_animate_bg: {
          "0%, 100%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
          },
          "50%": {
            transform: "translate3d(-45px, -90px, 0px) rotate(180deg)",
          },
        },
        third_animate_bg: {
          "0%, 100%": {
            transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
          },
          "50%": {
            transform: "translate3d(120px, -90px, 0px) rotate(-235deg)",
          },
        },
      },
      animation: {
        first_animate_bg: "first_animate_bg 15s linear infinite",
        second_animate_bg: "second_animate_bg 15s linear infinite",
        third_animate_bg: "third_animate_bg 15s linear infinite",
      },

      screens: {
        laptop: { max: "1920px" },
        // => @media (max-width: 1535px) { ... }

        tablet: { max: "768px" },
        // => @media (max-width: 1279px) { ... }

        mobile: { max: "390px" },
        // => @media (max-width: 1023px) { ... }
      },
    },
  },
  // plugins: [],
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".blur-bg": {
          filter: "blur(100px)",
        },
        ".blur-bg:nth-of-type(1)": {
          background: "#a287d5",
          top: "-10vh",
          right: "5vw",
        },
        ".blur-bg:nth-of-type(2)": {
          background: "#e4b8bf",
          top: "-5vh",
          right: "-20vw",
        },
        ".blur-bg:nth-of-type(3)": {
          background: "#8b6bc5",
          top: "-10vh",
          left: "-10vw",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
