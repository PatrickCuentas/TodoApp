import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "../features/TaskSlice";

export const FilterLink = ({ children, filter }) => {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.task.visibilityFilter);

  const handleSetVisibilityFilter = () => {
    dispatch(setVisibilityFilter(filter));
  };

  const btnClass = classNames(
    {
      "text-light-theme-clr-primary dark:text-dark-theme-clr-primary": visibilityFilter !== filter,
      "text-clr-category-hover": visibilityFilter === filter,
    },
    "font-bold"
  );

  return (
    <button onClick={handleSetVisibilityFilter} className={btnClass}>
      {children}
    </button>
  );
};
