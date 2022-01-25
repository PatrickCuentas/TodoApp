export const handleTheme = (themeMode, dispatch, toogleThemeMode) => {
  const htmlEl = document.querySelector("html");
  themeMode === "DARK" ? (htmlEl.classList = "") : (htmlEl.classList = "dark");
  dispatch(toogleThemeMode());
};
