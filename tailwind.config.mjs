/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E01010",
          "red-dark": "#B50D0D",
          black: "#0A0A0A",
          carbon: "#141414",
          "carbon-light": "#1E1E1E",
          gray: "#2A2A2A",
          "gray-mid": "#3D3D3D",
          "gray-light": "#888888",
          white: "#F5F5F5",
        },
      },
      fontFamily: {
        heading: ["Rajdhani", "sans-serif"],
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
