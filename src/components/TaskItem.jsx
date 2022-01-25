import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CrossIcon } from "../svgs/CrossIcon";
import { BiCheck } from "react-icons/bi";
import classNames from "classnames";
import { IconContext } from "react-icons";
import { deleteTask, toogleCompletedTask } from "../features/taskSlice";

export const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const { description, completed } = task;
  const classNameLI = classNames(
    "p-5",
    "md:p-6",
    "border-b-2",
    "border-[#e8e7ec]",
    "dark:border-[#2E3146]",
    "flex",
    "flex-wrap",
    "items-center",
    "justify-between"
  );

  const classNameICON = classNames("absolute", "text-[#fff]", {
    block: completed,
  });

  const classNameButtonICON = classNames(
    "relative",
    "flex",
    "justify-center",
    "items-center",
    "mr-3",
    "checkbox-round",
    { "gradient-round": completed }
  );

  const handleToogleCompleted = () => {
    dispatch(toogleCompletedTask(index));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(index));
  };

  return (
    <li className={classNameLI}>
      <div className="flex flex-wrap items-center">
        <button onClick={handleToogleCompleted} className={classNameButtonICON}>
          {completed && (
            <IconContext.Provider value={{ className: classNameICON }}>
              <BiCheck />
            </IconContext.Provider>
          )}
        </button>
        <p
          className={`text-[14px] md:text-base ${
            completed
              ? "line-through text-light-theme-clr-task-completed dark:text-dark-theme-clr-task-completed"
              : "text-light-theme-clr-task-active dark:text-dark-theme-clr-task-active"
          }`}
        >
          {description}
        </p>
      </div>
      <button onClick={handleDeleteTask}>
        <CrossIcon />
      </button>
    </li>
  );
};
