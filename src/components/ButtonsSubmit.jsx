import React from 'react';
import styles from '../styles/buttons.module.css';

const ButtonsSubmit = ({ isValid }) => {
  return (
    <div className="d-flex justify-content-between">
      <button disabled className={styles.cancel}>
        next
      </button>
      <button
        type="submit"
        disabled={!isValid}
        className={isValid ? styles.submit : styles.submitDisabled}
      >
        Submit
      </button>
    </div>
  );
};

export default ButtonsSubmit;
