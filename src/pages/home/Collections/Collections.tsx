import React from 'react';
import styles from './Collections.module.css';
import collections from '../../../assets/home/collections/christopher-campbell.png';

export default function Collections(): JSX.Element {
  return (
    <div className={styles.divCollections}>
      <h2 className={styles.collectionH2}>Новая коллекция</h2>
      <section className={styles.collections}>
        <div className={styles.collection}>
          <img src={collections} alt='' />
          <div>Купальник Glow</div>
          <span>$129</span>
        </div>
        <div className={styles.collection}>
          <img src={collections} alt='' />
          <div>Купальник Glow</div>
          <span>$129</span>
        </div>
        <div className={styles.collection}>
          <img src={collections} alt='' />
          <div>Купальник Glow</div>
          <span>$129</span>
        </div>
      </section>
      <button className={styles.arrowBtn}>🠒</button>
      <button className={styles.openStore}>Открыть магазин</button>
    </div>
  );
}
