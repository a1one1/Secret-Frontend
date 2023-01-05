import React from 'react';
import styles from './Basket.module.css';
import basketImg from '../../../../assets/header/basket.svg';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

export default function Basket(): JSX.Element {
  const { basket } = useTypedSelector(state => state.user);

  return (
    <div className={styles.basket}>
      <img src={basketImg} alt='вфвф' />
      <nav>{basket.length}</nav>
    </div>
  );
}
