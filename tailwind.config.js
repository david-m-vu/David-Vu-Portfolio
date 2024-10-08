/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
    screens: {
      "sm-phone": "452px",
      "phone": "556px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px"
    }
  },
  plugins: [],
}

