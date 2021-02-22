const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      dropdown: "#192a42",
      "navy-0": "#f2f6fa",
      "navy-100": "#dde8f4",
      "navy-200": "#a1bddc",
      "navy-300": "#6b90c0",
      "navy-400": "#3b64a0",
      "navy-500": "#2a456d",
      "navy-600": "#253e62",
      "navy-700": "#213757",
      "navy-800": "#192a42",
      "navy-900": "#101c2c",
      "navy-1000": "#080e16",
      "navy-dark": "#1d2731",
    },

    gradientColorStops: (theme) => ({
      "btn-start": "#426399",
      "btn-end": "#30466b",
    }),

    extend: {
      fontFamily: {
        sans: ["avenir next", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "md-card": "15px",
      },
      textColor: {
        "card-body": "#2b4667",
        "footer-link": "#4db1fd",
      },
      animation: {
        heart: "heart 4s ease-in-out  2s infinite alternate",
        "heart-1": "heart 4s ease-in-out  3s infinite alternate",
        "heart-2": "heart 4s ease-in-out  5s infinite alternate",
        "heart-3": "heart 4s ease-in-out  7s infinite alternate",
        "heart-4": "heart 5s ease-in-out  9s infinite alternate",
      },
      keyframes: {
        heart: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.3)" },
        },
      },
      backgroundColor: (theme) => ({
        dropdown: "#192a42",
        "navy-0": "#f2f6fa",
        "navy-100": "#dde8f4",
        "navy-200": "#a1bddc",
        "navy-300": "#6b90c0",
        "navy-400": "#3b64a0",
        "navy-500": "#2a456d",
        "navy-600": "#253e62",
        "navy-700": "#213757",
        "navy-800": "#192a42",
        "navy-900": "#101c2c",
        "navy-1000": "#080e16",
        "navy-dark": "#1d2731",
      }),
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/img/nio-bg.png')",
      }),
      height: {
        hero: "700px",
        "md-card": "535px",
        "lg-card": "650px",
      },
      width: {
        "large-card": "700px",
        "sm-card": "400px",
        "md-card": "500px",
      },
      gradientColorStops: (theme) => ({
        ...colors,
        bluish: "#4089cc",
        cyanish: "rgb(112,185,198)",
      }),
    },
    spacing: {
      //My custom spacing
      pointer: "350px",
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
