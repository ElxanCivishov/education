/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#038477",
        PrimaryDarkColor: "#068073",
        SecondaryColor: "#103557",
        LightColor: "#F2F6F6",
        LightHoverColor: "#E1EDEE",
        BorderColor: "#e5e7eb",
        BorderDarkColor: "#d9d9d9",
        Light: "#BEBEBE",
        SaveBtnBg: "#103557",
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
