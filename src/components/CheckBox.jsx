import React from 'react';

const CheckBox = ({ name, handleChange }) => {
  return (
    <div className="mb-4">
      <input
        className="form-check-input"
        name={name}
        type="checkbox"
        id={name}
        onChange={(e) => handleChange({ target: { name, value: e.target.checked } })}
      />
      <label className="form-check-label ms-2" htmlFor={name}>
        Remember me
      </label>
    </div>
  );
};

export default CheckBox;
