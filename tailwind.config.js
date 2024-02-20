/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#121826",
        primary: "#bb38b4",
        secondary: "#ff73d3",
        accent: "#fd3df3"
      }
    },
  },
  plugins: [],
}

