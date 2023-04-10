import React, { useState } from 'react';

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (event) => {
    setSelectedOption(Number(event.target.value));
  };

  return (
    <div className="mb-3">
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value={1}
          checked={selectedOption === 1}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Radio selection 1
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value={2}
          checked={selectedOption === 2}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Radio selection 2
        </label>
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          value={3}
          checked={selectedOption === 3}
          onChange={handleOptionChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Radio selection 3
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
