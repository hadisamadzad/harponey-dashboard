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
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              50: "#F4F5F3",
              100: "#E8EAE7",
              200: "#C6CBC2",
              300: "#A4AC9E",
              400: "#5F6E55",
              500: "#1B300C",
              600: "#182B0B",
              700: "#101D07",
              800: "#0C1605",
              900: "#080E04",
              foreground: "#FFFFFF",
              DEFAULT: "#1B300C",
            },
            secondary: {
              50: "#F7FAED",
              100: "#EFF5Df",
              200: "#D7E6B1",
              300: "#BDD687",
              400: "#88B53F",
              500: "#58970B",
              600: "#4A8708",
              700: "#397006",
              800: "#295904",
              900: "#1D4502",
              950: "#102B01",
              foreground: "#FFFFFF",
              DEFAULT: "#58970B",
            },
            // ... rest of the colors
          },
        },
      },
    }),
  ],
};
