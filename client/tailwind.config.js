/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regular-blue": "#2E32BE",
      },
      spacing: {
        0.5: "4px",
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        5.5: "40px",
        6: "48px",
      },
      borderRadius: {
        "card-radius": "1.2rem",
      },
    },
  },
  plugins: [],
};
