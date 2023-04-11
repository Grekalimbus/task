import React, { useState, useEffect } from 'react';
import styles from '../styles/dropdown.module.css';

const Dropdown = ({ name, dropdown, handleChange }) => {
  return (
    <div className="mb-5" style={{ width: '100%' }}>
      <label htmlFor="Dropdown Title" className="mb-2">
        Dropdown Title
      </label>
      <select
        name={name}
        className={styles.select}
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option className={styles.options}>Dropdown options</option>
        <option className={styles.options}>Dropdown options2</option>
        <option className={styles.options}>Dropdown options3</option>
      </select>
    </div>
  );
};

export default Dropdown;
