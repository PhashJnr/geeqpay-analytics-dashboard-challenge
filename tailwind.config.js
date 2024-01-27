/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JakartaMd: ["PlusJakarta-Medium", "san-serif"],
        JakartaSmBd: ["PlusJakarta-SemiBold", "san-serif"],
      },
    },
  },
  plugins: [],
};
