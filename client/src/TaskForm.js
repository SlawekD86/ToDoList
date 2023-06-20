import React, { useState } from 'react';
import shortid from 'shortid';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    const taskData = { id: shortid.generate(), name: taskName };
    addTask(taskData);
    setTaskName('');
  };

  return (
    <form id="add-task-form" onSubmit={submitForm}>
      <input
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        className="text-input"
        autoComplete="off"
        type="text"
        placeholder="Type your description"
        id="task-name"
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TaskForm;

