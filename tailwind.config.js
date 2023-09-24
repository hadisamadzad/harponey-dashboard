const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "harponey",
      themes: {
        light: {
          colors: {
            background: "#ffffff", // or DEFAULT
            foreground: "#11181c", // or 50 to 900 DEFAULT
            primary: {
              50: "#f9f0fa",
              100: "#f3e4f5",
              200: "#debae3",
              300: "#c892d1",
              400: "#9f54b0",
              500: "#77258d",
              600: "#671d80",
              700: "#4e1469",
              800: "#3a0d54",
              900: "#270840",
              950: "#160329",
              foreground: "#ffffff",
              DEFAULT: "#77258d",
            },
            secondary: {
              50: "#f7faed",
              100: "#eff5df",
              200: "#d7e6b1",
              300: "#bdd687",
              400: "#88b53f",
              500: "#58970b",
              600: "#4a8708",
              700: "#397006",
              800: "#295904",
              900: "#1d4502",
              950: "#102b01",
              foreground: "#ffffff",
              DEFAULT: "#58970b",
            },
            // ... rest of the colors
          },
        },
      },
    }),
  ],
};
