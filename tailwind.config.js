/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-background": "url('/src/assets/image/SearchBackground.svg')",
        "accordion-background":
          "url('/src/assets/image/AccordionBackground.svg')",
        "404-background": "url('/src/assets/image/404.svg')",
      },
    },
  },
  plugins: [],
};
