module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "clr-category-hover": "hsl(220, 98%, 61%)",
      "light-theme": {
        "clr-primary": "#B2B1B6",
        "clr-task-completed": "#DCDCDE",
        "clr-task-active": "#72717f",
      },
      "dark-theme": {
        "clr-primary": "#65687d",
        "clr-task-completed": "#45485D",
        "clr-task-active": "#BDBFD8",
      },
    },
    backgroundColor: {
      "light-theme": {
        bg: "hsl(0, 0%, 98%)",
      },
      "dark-theme": {
        bg: "#181824",
        "bg-input": "#25273c",
      },
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
