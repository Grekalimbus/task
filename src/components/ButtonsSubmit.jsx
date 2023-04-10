import React from 'react';
import styles from '../styles/buttons.module.css';

const ButtonsSubmit = ({ isValid }) => {
  return (
    <div className="d-flex justify-content-between">
      <button type="submit" disabled={!isValid} className={styles.cancel}>
        Submit
      </button>
      <button type="submit" disabled={!isValid} className={styles.submit}>
        Submit
      </button>
    </div>
  );
};

export default ButtonsSubmit;
