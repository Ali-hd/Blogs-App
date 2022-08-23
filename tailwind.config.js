/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: "#5dd5c4",
      error: "#ff4d4f",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      height: {
        15: "3.75rem",
      },
    },
    screens: {
      mwlg2: { max: "1150px" },
      mwlg: { max: "1050px" },
      mwmd3: { max: "1000px" },
      mwmd2: { max: "900px" },
      mwmd: { max: "880px" },
      mwsm4: { max: "810px" },
      mwsm3: { max: "750px" },
      mwsm20: { max: "720px" },
      mwsm2: { max: "700px" },
      mwsm1: { max: "620px" },
      mwsm: { max: "600px" },
      mwxsm2: { max: "550px" },
      mwxsm: { max: "500px" },
      mwxxsm: { max: "400px" },
      sm: "600px",
      sm20: "720px",
      md: "910px",
    },
    borderRadius: {
      DEFAULT: "3px",
    },
    backgroundImage: {
      "hero-pattern": "url('../public/images/herobg.svg')",
    },
  },
  plugins: [],
};
