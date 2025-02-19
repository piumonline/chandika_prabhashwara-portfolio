import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        monalista: ["var(--font-monalista)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "3rem",  //48px
        "7xl": "4rem", //64px
        "8xl": "6.25rem",
        "9xl": "9rem",
        "10xl": "8rem", // 128px
        "11xl": "10rem", // 128px
      },
      colors: {
        "orange-theme": "#FF7A29",
        "gray-dark": "#2B2826",
        "border-gray-dark": "#2B28264D",
      },
    },
  },
  plugins: [],
};
export default config;
