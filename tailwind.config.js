const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          600: '#1281BA', // rocket insights blue
        },
        indigo: {
          ...colors.indigo,
          600: '#482FE9', // dept indigo
        },
        teal: {
          ...colors.teal,
          600: '#12DCC5', // algomart aqua
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
