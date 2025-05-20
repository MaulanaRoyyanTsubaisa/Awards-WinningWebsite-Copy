/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/global.css"],
  safelist: [
    "bento-tilt_1",
    "bento-tilt_2",
    "bento-title",
    "special-font",
    "hero-heading",
  ],

  theme: {
    extend: {
      fontFamily: {
        zentry: ['"zentry"', "sans-serif"],
        general: ['"general"', "sans-serif"],
        "circular-web": ['"circular-web"', "sans-serif"],
        "robert-medium": ['"robert-medium"', "sans-serif"],
        "robert-regular": ['"robert-regular"', "sans-serif"],
      },
      colors: {
        blue: {
          50: "#dfdff0",
          75: "#dfdff2",
          100: "#f0f2fa",
          200: "#010101",
          300: "#4fb7dd",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#83983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};
