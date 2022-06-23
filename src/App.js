import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  }, []);

  const setComplete = (id) => {
    const newTasks = [...tasks];

    for (let task of newTasks) {
      if (task.id === id) {
        if (task.is_complete == false) {
          axios
            .patch(
              `https://task-list-api-c17.herokuapp.com/tasks/${task.id}/mark_complete`
            )
            .then(() => {
              // eslint-disable-next-line camelcase
              console.log('Patch completed');
              // eslint-disable-next-line camelcase
              task.is_complete = true;
              setTasks(newTasks);
            })

            .catch((error) =>
              console.log(`Cannot update the complete status ${error}`)
            );
        } else if (task.is_complete == true) {
          axios
            .patch(
              `https://task-list-api-c17.herokuapp.com/tasks/${task.id}/mark_incomplete`
            )
            .then(() => {
              // eslint-disable-next-line camelcase
              console.log('Patch completed');

              // eslint-disable-next-line camelcase
              task.is_complete = false;
              setTasks(newTasks);
            })
            .catch((error) =>
              console.log(`Cannot update the complete status ${error}`)
            );
        }
        console.log(task.is_complete);
      }
    }
  };

  const deleteTask = (id) => {
    axios
      .delete(`https://task-list-api-c17.herokuapp.com/tasks/${id}`)
      .then(() => {
        // eslint-disable-next-line camelcase
        console.log('deleting task');
        const newTasks = tasks.filter((task) => task.id != id);
        setTasks(newTasks);
      })
      .catch((error) => console.log(`Cannot delete task ${error}`));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={tasks}
              setCompleteCallback={setComplete}
              deleteTaskCallback={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
