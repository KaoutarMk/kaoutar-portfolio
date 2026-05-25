export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        cream: "#F5F2EE",
        ink: "#252525",
        muted: "#6F6A64",
        blush: "#E9D6D0",
        clay: "#D8B8AD",
        linen: "#EEEAE4"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(37, 37, 37, 0.08)"
      }
    }
  },
  plugins: []
};
