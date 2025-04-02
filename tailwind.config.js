/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-teal-900",
    "border-teal-900",
    // Add any other dynamic color classes you might use
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        "brand-teal": "#67DAFA",
        "brand-blue": "#3F89F6",
        "brand-purple": "#635DF5",
        "brand-dark": "#252E4B",

        // Brand Color Tints
        "brand-teal-light": "#F0FBFF", // Light teal
        "brand-blue-light": "#ECF3FE", // Light blue
        "brand-purple-light": "#EFEFFE", // Light purple
        "brand-dark-light": "#EFF0F5", // Light variant of dark color

        // Grey Colors
        "gray-cloud": "#ECEFF6",
        "gray-smoke": "#D3D5E1",
        "gray-steel": "#BCC0CC",
        "gray-space": "#9CA2B2",
        "gray-graphite": "#6E7180",
        "gray-arsenic": "#40424E",
        "gray-phantom": "#1F1E24",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        yellix: ["Yellix", "sans-serif"],
        bogue: ["Bogue", "serif"],
        mont: ["Mont", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(to right, #67DAFA, #3F89F6, #635DF5)",
      },
      keyframes: {
        "light-sweep": {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(150%) skewX(-20deg)" },
        },
      },
      animation: {
        "light-sweep": "light-sweep 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};
