import { TaskItem } from "../components/TaskItem.jsx";

export const getTaskListByFilter = (tasks, filter) => {
  switch (filter) {
    case "ALL":
      return tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} index={index} />
      ));
    case "ACTIVE":
      return tasks
        .filter((task) => !task.completed)
        .map((task, index) => (
          <TaskItem key={task.id} task={task} index={index} />
        ));
    case "COMPLETED":
      return tasks
        .filter((task) => task.completed)
        .map((task, index) => (
          <TaskItem key={task.id} task={task} index={index} />
        ));
  }
};
