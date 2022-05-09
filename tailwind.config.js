module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url(https://us.123rf.com/450wm/avectors/avectors1809/avectors180900110/108090601-starry-sky-space-background-of-perfect-dark-night-and-twinkling-stars-vector-real-stars-and-planets-.jpg?ver=6)",
      },
      colors: {
        sw_black: "#120913",
        sw_gray: "#373737",
        sw_yellow: "#a99915",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
