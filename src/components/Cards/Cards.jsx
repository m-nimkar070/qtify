import React from 'react';
import styles from './Cards.module.css';
import {ReactComponent as Rect} from '../../assets/Rectangle.svg';

const Cards = ({followers , name}) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <Rect />
            <p>{followers}</p>
        </div>
      <div className={styles.name}>
        {name}
      </div>
    </div>
  )
}

export default Cards
