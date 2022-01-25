import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../features/TaskSlice";
import themeSliceReducer from "../features/themeSlice.jsx";

export const store = configureStore({
  reducer: {
    task: taskSliceReducer,
    theme: themeSliceReducer,
  },
});
