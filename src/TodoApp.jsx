import { TaskForm } from './components/TaskForm'
import { TaskItemContainer } from './components/TaskItemContainer'
import { Footer } from './ui/Footer'
import { Header } from './ui/Header'
import { MoonIcon } from './svgs/MoonIcon'
import { SunIcon } from './svgs/SunIcon'
import { useSelector, useDispatch } from 'react-redux'
import { toogleThemeMode } from './features/themeSlice'
import { handleTheme } from './utils/handleTheme'
import { useEffect } from 'react'
import classNames from 'classnames'

export default function TodoApp() {
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.theme.themeMode)
  const tasks = useSelector(state => state.task.tasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const containerClassNames = classNames(
    'relative',
    'bg-light-theme-bg',
    'dark:bg-dark-theme-bg',
    'mb-10'
  )

  return (
    <div className={containerClassNames}>
      <Header theme={themeMode} />
      <main className="max-w-xl mx-auto py-[75px] px-5 relative">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-[#fff] text-2xl md:text-3xl lg:text-[40px] font-semibold tracking-[.35em]">
            TODO
          </h1>
          <button
            onClick={() => handleTheme(themeMode, dispatch, toogleThemeMode)}
          >
            {themeMode === 'DARK' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <TaskForm />

        <TaskItemContainer />

        <Footer />
      </main>
    </div>
  )
}
