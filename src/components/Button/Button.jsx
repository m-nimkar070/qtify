import React from 'react';
import styles from './Button.module.css';

const Button = ({child}) => {
  return (
    <div className={styles.btn}>
      {child}
    </div>
  )
}

export default Button
