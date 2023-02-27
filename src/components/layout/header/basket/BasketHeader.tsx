import React from 'react';
import styles from './BasketHeader.module.css';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { Link } from 'react-router-dom';

export default function Basket(): JSX.Element {
  const { basket } = useTypedSelector(state => state.user);

  return (
    <div className={styles.basket}>
      <Link to='/basket'>
        <img src='https://svgur.com/i/psz.svg' alt='вфвф' />
      </Link>
      {basket.length !== 0 ? (
        <div className={styles.basketLength}>{basket.length}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
