/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FED049",
        background: "#F9FAFF",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
      },
      animation: {
        goyang: "goyang 7s ease-in-out infinite",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
