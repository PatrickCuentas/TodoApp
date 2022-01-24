export const handleTheme = ([ themeMode, setThemeMode ]) => {
  const htmlEl = document.querySelector("html");
  if (themeMode === "dark") {
    setThemeMode("light");
    htmlEl.classList = "";
  } else {
    setThemeMode("dark");
    htmlEl.classList = "dark";
  }
};
