/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.{html,js},jsx,tsx"],
  theme: {
    extend: {
      borderRadius: {
        xs: "0.125rem", // 2px
        sm: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
        "4xl": "2rem", // 32px
      },
    },
  },
  plugins: [],
};
