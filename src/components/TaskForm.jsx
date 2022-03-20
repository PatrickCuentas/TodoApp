import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice.jsx";

export const TaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length < 1) return;
    const newId = tasks.length + 1;
    dispatch(
      addTask({
        id: newId,
        description: inputValue,
        completed: false,
      })
    );
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12">
      <div className="input-box px-6 pt-5 pb-5 dark:bg-dark-theme-bg-input">
        <button
          type="submit"
          className="checkbox-round gradient-round transition-all animate-pulse"
        ></button>
        <input
          onChange={handleInputChange}
          value={inputValue}
          className="text-[16.2px] font-normal font-sans ml-6 -mt-1 dark:bg-dark-theme-bg-input dark:text-[#fff]"
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
    </form>
  )
};
