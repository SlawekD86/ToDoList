import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import Header from './Header';
import TasksSection from './TasksSection';

const App = () => {
  const [socket, setSocket] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const newSocket = io(process.env.PORT || 'http://localhost:8000/');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Connected to socket');
      });

      socket.on('newTask', (task) => {
        addTask(task);
      });

      socket.on('removeTask', (taskId) => {
        removeTask(taskId);
      });

      socket.on('updateData', (tasksList) => {
        updateTasks(tasksList);
      });
    }
  }, [socket]);

  const updateTasks = (tasks) => {
    setTasks(tasks);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    socket.emit('removeTask', taskId);
  };

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    socket.emit('newTask', task);
  };

  return (
    <div className="App">
      <Header />
      <TasksSection tasks={tasks} removeTask={removeTask} addTask={addTask} />
    </div>
  );
};

export default App;
