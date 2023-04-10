import React from 'react';

const ToggleCheckBox = ({ name, value, handleChange }) => {
  return (
    <div className="form-check form-switch mb-5">
      <input
        name={name}
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {value ? 'Off' : 'On'}
      </label>
    </div>
  );
};

export default ToggleCheckBox;
