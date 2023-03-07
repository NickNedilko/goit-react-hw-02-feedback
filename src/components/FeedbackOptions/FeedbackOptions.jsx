import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleClick }) => {
  return options.map(option => {
    return (
      <button
        className={css.button}
        key={option}
        type="button"
        onClick={() => handleClick(option)}
      >
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;
