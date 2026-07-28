/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef6f0",
          100: "#d3e8da",
          200: "#a6d1b6",
          400: "#52B788",
          600: "#2D6A4F",
          800: "#1B4332",
          900: "#122D22",
        },
        mango: {
          400: "#F7B267",
          500: "#F4A261",
          600: "#E07A2C",
        },
        soil: {
          500: "#6F4E37",
          700: "#4A3325",
        },
        cream: "#FFF8F0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "leaf-texture":
          "radial-gradient(circle at 1px 1px, rgba(27,67,50,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
