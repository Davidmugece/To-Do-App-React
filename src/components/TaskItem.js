import React from 'react';

const TaskItem = ({ task, setCurrentTask, deleteTask, toggleComplete }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
      <button onClick={() => setCurrentTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
