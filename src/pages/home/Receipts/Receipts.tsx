import React from 'react';
import styles from './Receipts.module.css';
import modelFirst from '../../../assets/home/receipts/model-first.svg';
import modelSecond from '../../../assets/home/receipts/model-second.svg';
import modelThird from '../../../assets/home/receipts/model-third.svg';
import backgraund from '../../../assets/home/receipts/backgraund.jpg';

import Collections from '../Collections/Collections';
import { Link } from 'react-router-dom';

export default function Receipts(): JSX.Element {
  return (
    <section className={styles.sectionReceipts}>
      <div>
        <img src={backgraund} className={styles.backgraund} alt='' />
        <img src={modelFirst} className={styles.modelFirst} alt='' />
        <img src={modelSecond} className={styles.modelSecond} alt='' />
        <img src={modelThird} className={styles.modelThird} alt='' />
      </div>
      <div>
        <h1>Новые поступления в этом сезоне</h1>
        <p>
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
          этом сезоне. Время исследовать.
        </p>
        <div className={styles.storeBtn}>
          <button className={styles.arrowBtn}>↓</button>
          <Link to={'/shop'}>
            <button className={styles.openBtn}>Открыть магазин</button>
          </Link>
        </div>
        <div className={styles.swapBtn}>
          <button></button>

          <button></button>

          <button></button>
        </div>
      </div>
    </section>
  );
}
