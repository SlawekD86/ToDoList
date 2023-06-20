import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const TasksSection = ({ tasks, removeTask, addTask }) => {
  return (
    <section className="tasks-section" id="tasks-section">
      <h2>Tasks</h2>

      <ul className="tasks-section__list" id="tasks-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} />
        ))}
      </ul>

      <TaskForm addTask={addTask} />
    </section>
  );
};

export default TasksSection;
