/** @type {import('tailwindcss').Config} */
import { flashBackground } from "/assets/images/uiImages/flashBackground.png";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      backgroundImage: {
        flashBackground:
          "url('../public/assets/images/uiImages/flashBackground.webp')",
      },
      colors: {
        tBlack: "#231F20",
        tMuted: "#666697",
        tOrange: {
          100: "#FEF4EC",
          400: "#FF8C00",
          900: "#9D5019",
        },
        tGreen: {
          100: "#EFFBF5",
          400: "#127B4E",
        },
        tPurple: {
          100: "#FEF0F2",
          400: "#B60B45",
        },
        tGrey: {
          default: "#F3F3F3",
        },
      },
    },
  },
  plugins: [],
};
