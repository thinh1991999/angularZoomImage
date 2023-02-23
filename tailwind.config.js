/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: {
  //   // enabled: true,
  //   // content: ["./src/**/*.{html,ts}"],
  // },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "Very-dark-blue": "hsl(220, 13%, 13%)",
        "Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "Grayish-blue": "hsl(220, 14%, 75%)",
        "Light-grayish-blue": "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Orange: "hsl(26, 100%, 55%)",
        "Pale-orange": "hsl(25, 100%, 94%)",
      },
      boxShadow: {
        shadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
      },
    },
    screens: {
      spsm: "250px",
      smm: "300px",
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
