import { useSelector, useDispatch } from "react-redux";
import { deleteCompletedTasks } from "../features/TaskSlice";
import { getTaskListByFilter } from "../utils/getTaskListByFilter";
import { getUncompletedTasksLength } from "../utils/getUncompletedTasksLength";

export const TaskItemContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const visibilityFilter = useSelector((state) => state.task.visibilityFilter);

  const handleDeleteCompletedTasks = () => {
    dispatch(deleteCompletedTasks());
  };

  return (
    <div className="mt-5 rounded-[8px] bg-light-theme-bg dark:bg-dark-theme-bg-input shadow-xl">
      <ul>
          {getTaskListByFilter(tasks, visibilityFilter)}
      </ul>
      <div className="p-5 md:p-6 flex flex-wrap justify-between text-light-theme-clr-primary dark:text-dark-theme-clr-primary">
        <div>
          <p>{getUncompletedTasksLength(tasks)} items left</p>
        </div>
        <div>
          <button onClick={handleDeleteCompletedTasks} className="font-normal">
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
};
