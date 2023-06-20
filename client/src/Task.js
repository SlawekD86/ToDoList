import React from 'react';

const Task = ({ task, removeTask }) => {
  return (
    <li className="task">
      {task.name}
      <button className="btn btn--red" onClick={() => removeTask(task.id, true)}>
        Remove
      </button>
    </li>
  );
};

export default Task;
