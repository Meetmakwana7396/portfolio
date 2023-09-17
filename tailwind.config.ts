import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"', "sans-serif"],
        Joseph: ['"Josefin Sans"', "sans-serif"],
        Barlow: ['"Barlow Condensed"', "sans-serif"],
      },
      colors: {
        primary: "#94df21",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
