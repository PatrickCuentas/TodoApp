import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageItem = (key) => {
  return (
    JSON.parse(localStorage.getItem(key)) || [
      { id: 1, description: "Drink Water", completed: false },
    ]
  );
};

const initialState = {
  tasks: getLocalStorageItem("tasks"),
  visibilityFilter: "ALL",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toogleCompletedTask: (state, action) => {
      const newTasks = state.tasks;
      newTasks[action.payload].completed = !newTasks[action.payload].completed;
      state.tasks = newTasks;
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
    deleteCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  addTask,
  toogleCompletedTask,
  deleteTask,
  deleteCompletedTasks,
  setVisibilityFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
