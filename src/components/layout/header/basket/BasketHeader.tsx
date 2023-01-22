import React, { useEffect, useState } from 'react';
import styles from './BasketHeader.module.css';
import basketImg from '../../../../assets/header/basket.svg';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

export default function Basket(): JSX.Element {
  const { basket } = useTypedSelector(state => state.user);

  return (
    <div className={styles.basket}>
      <a href='/basket'>
        <img src={basketImg} alt='вфвф' />
      </a>
      {basket.length !== 0 ? (
        <div className={styles.basketLength}>{basket.length}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
