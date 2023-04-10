import React from 'react';

const CheckBox = ({ name, handleChange }) => {
  return (
    <div className="mb-4">
      <input
        name={name}
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        onChange={handleChange}
      />
      <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
  );
};

export default CheckBox;
