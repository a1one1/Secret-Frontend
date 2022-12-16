import React from 'react';
import styles from './Collections.module.css';
import collections from '../../../assets/home/collections/christopher-campbell.png';
import arrow from '../../../assets/home/collections/arrow.svg';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

export default function Collections(): JSX.Element {
  const { error, loading, models } = useTypedSelector(state => state.model);

  const modelsSlice = models.slice(1, 4);

  return (
    <div className={styles.divCollections}>
      <h2 className={styles.collectionH2}>Новая коллекция</h2>
      <section className={styles.collections}>
        {/* {modelsSlice.map(item => (
          <div className={styles.collection}>
            <div className={styles.collectionDiv}>
              <img src={item.modelImg} alt='' />
            </div>
            <h4>{item.name}</h4>
            <span>{item.price.toString()}</span>
          </div>
        ))} */}
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
