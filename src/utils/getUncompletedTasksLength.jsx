const getUncompletedTasks = (tasks) => {
  return tasks.filter((task) => {
    return !task.completed;
  });
};

export const getUncompletedTasksLength = (tasks) => {
  const uncompletedTasks = getUncompletedTasks(tasks);
  return uncompletedTasks.length;
};
