/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#121826",
        "bg-dark-lighter": "#1b202c",
        primary: "#bb38b4",
        secondary: "#ff73d3",
        accent: "#fd3df3"
      }
    },
  },
  plugins: [],
}

