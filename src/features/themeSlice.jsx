import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "DARK",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleThemeMode: (state) => {
      state.themeMode = state.themeMode === "DARK" ? "LIGHT" : "DARK";
    },
  },
});

export const { toogleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
