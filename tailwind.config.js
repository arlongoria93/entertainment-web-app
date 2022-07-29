/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#fc4747",
          secondary: "#5a698f",
          accent: "#161d2f",
          content: "#ffffff",
          "base-100": "#10141e",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
