import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({
  id,
  title,
  description,
  // eslint-disable-next-line camelcase
  is_complete,
  setCompleteCallback,
  deleteTaskCallback,
}) => {
  // eslint-disable-next-line camelcase
  const buttonClass = is_complete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setCompleteCallback(id)}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => deleteTaskCallback(id)}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line camelcase
  is_complete: PropTypes.bool.isRequired,
  setCompleteCallback: PropTypes.func.isRequired,
  deleteTaskCallback: PropTypes.func.isRequired,
};

export default Task;
