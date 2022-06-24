/* eslint-disable jsx-a11y/label-has-associated-control */
import './TaskForm.css';
import { useState } from 'react';
import React from 'react';

const defaultTask = { title: '', description: '', isComplete: '' };

const TaskForm = (props) => {
  const [taskData, setTaskData] = useState(defaultTask);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newTaskData = { ...taskData };
    newTaskData[name] = value;
    setTaskData(newTaskData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.handleSubmission(taskData);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <label>Title</label>
      <input
        name="title"
        type="text"
        value={taskData.title}
        onChange={handleFormInput}
      />
      <label>Description</label>
      <input
        name="description"
        type="text"
        value={taskData.description}
        onChange={handleFormInput}
      />
      <label>isComplete</label>
      <input
        name="isComplete"
        type="text"
        value={taskData.isComplete}
        onChange={handleFormInput}
      />
      <input type="submit" />
    </form>
  );
};

export default TaskForm;
