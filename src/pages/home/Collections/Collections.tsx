import React from 'react';
import styles from './Collections.module.css';
import collections from '../../../assets/home/collections/christopher-campbell.png';
import arrow from '../../../assets/home/collections/arrow.svg';
import { Link } from 'react-router-dom';
export default function Collections(): JSX.Element {
  function a() {
    // e.target.onfocus;
    console.log('da');
  }

  return (
    <div className={styles.divCollections}>
      <h2 className={styles.collectionH2}>Новая коллекция</h2>
      <section className={styles.collections}>
        <div onChange={a} className={styles.collection}>
          <div className={styles.collectionDiv}>
            <img src={collections} alt='' />
          </div>
          <h4>Купальник Glow</h4>
          <span>$129</span>
        </div>
        <div className={styles.collection}>
          <div className={styles.collectionDiv}>
            <img src={collections} alt='' />
            <button className={styles.arrowBtn}></button>
          </div>
          <h4>Купальник Glow</h4>
          <span>$129</span>
        </div>

        <div className={styles.collection}>
          <div className={styles.collectionDiv}>
            <img src={collections} alt='' />
          </div>
          <h4>Купальник Glow</h4>
          <span>$129</span>
        </div>
      </section>

      <Link className={styles.linkStore} to='/shop'>
        <button>Открыть магазин </button>
      </Link>
    </div>
  );
}
