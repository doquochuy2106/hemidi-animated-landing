import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00E599",
          "green-dark": "#00B87A",
          "green-light": "#E6FAF3",
          dark: "#14171F",
          cream: "#F7F6F2",
          gray: "#6B7280",
          card: "#EFECE6",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      borderRadius: {
        'arch': '180px 180px 0 0',
      }
    },
  },
  plugins: [],
};
export default config;
