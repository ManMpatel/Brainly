/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Gray :{
          100: "#d7d7d7",// gray bit for showing the oimage area emty
          200:"#ffffff",// wight for maximum page color
          600:"#949493"// text color

        },
        purple:{
          600 : "#4242da", // darkpurpul for button primary
          200: "#dce2ff", // lightpurple for secondry button
          500:"#7177b0", // purple text for text in purple
        }
      }
    },
  },
  plugins: [],
}

