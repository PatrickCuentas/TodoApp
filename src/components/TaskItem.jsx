import { useDispatch } from 'react-redux'
import { CrossIcon } from '../svgs/CrossIcon'
import { BiCheck } from 'react-icons/bi'
import classNames from 'classnames'
import { IconContext } from 'react-icons'
import { deleteTask, toogleCompletedTask } from '../features/taskSlice'

export const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch()
  const { description, completed } = task
  const classNameLI = classNames(
    'pt-[.8rem]',
    'pb-[1rem]',
    'px-[1rem]',
    'border-b-2',
    'border-[#e8e7ec]',
    'dark:border-[#2E3146]',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
    'dndclass'
  )

  const classNameICON = classNames('absolute', 'text-[#fff]', {
    block: completed,
  })

  const classNameButtonICON = classNames(
    'relative',
    'flex',
    'justify-center',
    'items-center',
    'mr-6',
    'checkbox-round',
    { 'gradient-round': completed }
  )

  const handleToogleCompleted = () => {
    dispatch(toogleCompletedTask(index))
  }

  const handleDeleteTask = () => {
    dispatch(deleteTask(index))
  }

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
          className={`text-[14.5px] md:text-[18px] ${
            completed
              ? 'line-through text-light-theme-clr-task-completed dark:text-dark-theme-clr-task-completed'
              : 'text-light-theme-clr-task-active dark:text-dark-theme-clr-task-active'
          }`}
        >
          {description}
        </p>
      </div>
      <button onClick={handleDeleteTask}>
        <CrossIcon />
      </button>
    </li>
  )
}
