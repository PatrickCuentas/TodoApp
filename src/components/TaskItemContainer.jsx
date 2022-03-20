import { useSelector, useDispatch } from 'react-redux'
import { deleteCompletedTasks } from '../features/taskSlice.jsx'
import { getUncompletedTasksLength } from '../utils/getUncompletedTasksLength'
import GridLayout from 'react-grid-layout'
import { useWindowResize } from '../hooks/useWindowResize.jsx'
import { TaskItem } from './TaskItem.jsx'

export const TaskItemContainer = () => {
  const INITIAL_SIZE = 576
  const [windowSize] = useWindowResize(INITIAL_SIZE)
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.task.tasks)
  const visibilityFilter = useSelector(state => state.task.visibilityFilter)

  const handleDeleteCompletedTasks = () => {
    dispatch(deleteCompletedTasks())
  }

  return (
    <div className="mt-5 rounded-[8px] bg-light-theme-bg dark:bg-dark-theme-bg-input shadow-xl">
      <div className="relative">
        <GridLayout isBounded={true} col={1} rowHeight={80} width={windowSize}>
          {visibilityFilter === 'ALL'
            ? tasks.map((task, index) => (
                <div
                  key={index}
                  data-grid={{ x: 0, y: index, w: 11.2, h: 0.7 }}
                >
                  <TaskItem key={task.id} task={task} index={index} />
                </div>
              ))
            : visibilityFilter === 'ACTIVE'
            ? tasks
                .filter(task => !task.completed)
                .map((task, index) => (
                  <div
                    key={index}
                    data-grid={{ x: 0, y: index, w: 11.2, h: 0.7 }}
                  >
                    <TaskItem key={task.id} task={task} index={index} />
                  </div>
                ))
            : visibilityFilter === 'COMPLETED'
            ? tasks
                .filter(task => task.completed)
                .map((task, index) => (
                  <div
                    key={index}
                    data-grid={{ x: 0, y: index, w: 11.2, h: 0.7 }}
                  >
                    <TaskItem key={task.id} task={task} index={index} />
                  </div>
                ))
            : null}
        </GridLayout>
      </div>
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
  )
}
