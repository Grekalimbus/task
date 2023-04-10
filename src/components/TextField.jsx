import React from 'react';

const TextField = ({ name, handleChange, title, type, error, placeHolder }) => {
  const getInputClasses = () => {
    return `form-control` + (error ? ' is-invalid' : '');
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{title}</label>
      <input
        placeholder={placeHolder}
        className={getInputClasses()}
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
      ></input>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextField;
