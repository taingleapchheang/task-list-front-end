import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const updateComplete = (id) => {
    console.log('Inside update task', id);

    const newTasks = [];
    for (const task of tasks) {
      const newTask = { ...task };
      if (newTask.id === id) {
        newTask.isComplete = !newTask.isComplete;
      }
      newTasks.push(newTask);
    }
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    console.log('Inside delete task', id);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            clickCallback={updateComplete}
            deleteCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
