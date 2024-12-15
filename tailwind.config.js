/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-teal-900',
    'border-teal-900',
    // Add any other dynamic color classes you might use
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        yellix: ["Yellix", "sans-serif"],
        bogue: ["Bogue", "serif"],
        mont: ["Mont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
