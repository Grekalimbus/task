import React, { useState } from 'react';

const RadioButtons = ({ name, handleChange, selectedOption }) => {
  return (
    <div className="mb-3">
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id="flexRadioDefault1"
          value={1}
          checked={selectedOption === 1}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Radio selection 1
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id="flexRadioDefault2"
          value={2}
          checked={selectedOption === 2}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Radio selection 2
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id="flexRadioDefault3"
          value={3}
          checked={selectedOption === 3}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Radio selection 3
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
