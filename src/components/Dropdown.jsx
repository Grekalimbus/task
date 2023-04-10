import React, { useState, useEffect } from 'react';
import styles from '../styles/dropdown.module.css';

const Dropdown = () => {
  const [value, setValue] = useState('Dropdown options');
  const [items, setItems] = useState([
    'Dropdown options',
    'Dropdown options 2',
    'Dropdown options 3',
  ]);
  useEffect(() => {
    if (value === 'Dropdown options') {
      setItems(['Dropdown options 2', 'Dropdown options 3']);
    }
    if (value === 'Dropdown options 2') {
      setItems(['Dropdown options', 'Dropdown options 3']);
    }
    if (value === 'Dropdown options 3') {
      setItems(['Dropdown options', 'Dropdown options 2']);
    }
  }, [value]);

  return (
    <div className="mb-5" style={{ width: '100%' }}>
      <label htmlFor="Dropdown Title" className="mb-2">
        Dropdown Title
      </label>
      <select
        className={styles.select}
        aria-label="Default select example"
        value="Dropdown options"
        name="Dropdown options"
        onChange={(e) => setValue(e.target.value)}
      >
        <option className={styles.options} value={'Dropdown options'}>
          {value}
        </option>

        {items.map((item) => {
          return (
            <option className={styles.options} key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
