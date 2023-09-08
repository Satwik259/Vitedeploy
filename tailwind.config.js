/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens:{
      "reqs": "375px",
      "reql": "1440px"
    }
  },
  plugins: [
    require("tailwind-clip-path")
  ],
  
};
