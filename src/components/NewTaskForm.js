/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line camelcase
const defaultTask = { id: '', is_complete: '', title: '', description: '' };

const NewTaskForm = (props) => {
  const [taskData, setTaskData] = useState(defaultTask);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newTaskData = { ...taskData };
    newTaskData[name] = value;
    console.log(newTaskData);
    setTaskData(newTaskData);
  };
  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.addNewTask(taskData);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="form_content">
        <label className="style">Title</label>
        <input
          name="title"
          type="text"
          value={taskData.name}
          onChange={handleFormInput}
        />
        <label className="style">Description</label>
        <input
          name="description"
          type="text"
          value={taskData.description}
          onChange={handleFormInput}
        />
        <label className="style">isComplete</label>
        <input
          name="is_complete"
          type="text"
          value={taskData.is_complete}
          onChange={handleFormInput}
        />
        <input type="submit" />
      </div>
    </form>
  );
};

NewTaskForm.propTypes = {
  addNewTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
