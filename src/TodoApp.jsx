import { useState } from "react";
import { handleTheme } from "./utils/handleTheme";
export const TodoApp = () => {
  const themeState = useState("dark");
  const [themeMode] = themeState;
  return (
    <div className="w-[50%] m-auto">
      <p className="text-3xl text-dark-theme-clr-task-completed">
        Inicio TodoApp
      </p>
      <button
        className="bg-[#000] text-[#fff] dark:bg-[red] dark:text-[#000] px-4 py-2"
        onClick={() => handleTheme(themeState)}
      >
        Toogle
      </button>
      <p>Mode {themeMode}</p>
    </div>
  );
};
