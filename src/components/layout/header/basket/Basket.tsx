import React from 'react';
import styles from './Basket.module.css';
import basket from '../../../../assets/header/basket.svg';

export default function Basket() {
  return (
    <div className={styles.basket}>
      <img src={basket} alt='вфвф' />
    </div>
  );
}
