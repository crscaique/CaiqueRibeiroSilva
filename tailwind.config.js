/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-x-left-fade-in": "bounce-x-left-fade-in 1.5s forwards 3", // Bounces 3 times, keeps final state
        "bounce-x-right-fade-in": "bounce-x-right-fade-in 1.5s forwards 3", // Bounces 3 times, keeps final state
      },
      keyframes: {
        "bounce-x-left-fade-in": {
          "0%": { transform: "translateX(-25%)", opacity: "0" },
          "50%": { transform: "translateX(0)", opacity: "0.85" },
          "100%": { transform: "translateX(0)", opacity: "0.85" },
        },
        "bounce-x-right-fade-in": {
          "0%": { transform: "translateX(25%)", opacity: "0" },
          "50%": { transform: "translateX(0)", opacity: "0.85" },
          "100%": { transform: "translateX(0)", opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
