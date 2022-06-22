import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, onClickCallback, onDeleteCallback }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => onClickCallback(id)}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => onDeleteCallback(id)}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Task;
