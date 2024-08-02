import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setCurrentTask, deleteTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setCurrentTask={setCurrentTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TaskList;
