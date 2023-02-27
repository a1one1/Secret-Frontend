import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderSuccess.module.css';

export default function OrderSuccess(): JSX.Element {
  return (
    <section className={styles.orderSuccessSection}>
      <div className={styles.HeadOrder}>
        <h2>Заказ оформлен</h2>
        <div className={styles.orderRoutes}>
          <Link className={styles.mainLink} to={'/'}>
            Главная
          </Link>
          <div className={styles.line}>—</div>
          <div className={styles.orderItem}>
            <Link className={styles.orderLink} to={'/shop'}>
              Оформление заказа
            </Link>
          </div>
          <div className={styles.line}>—</div>
          <div className={styles.orderItemGrey}>Заказ оформлен</div>
        </div>
      </div>
      <div className={styles.orderSuccessMain}>
        <div className={styles.item1}>
          <div className={styles.successImg}>
            <img src='https://svgur.com/i/ptw.svg' alt='' />
          </div>
          <div className={styles.successText}>
            <h4>Заказ успешно оформлен</h4>
            <p>Мы свяжемся с вами в ближайшее время!</p>
          </div>
        </div>
        <div className={styles.item2}>
          <Link to='/'>
            <button>Перейти на главную</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
