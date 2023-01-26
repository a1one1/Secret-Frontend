import React, { useState } from 'react';
import styles from './Collections.module.css';
import collections from '../../../assets/home/collections/christopher-campbell.png';
import arrow from '../../../assets/home/collections/arrow.svg';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import collections1 from '../../../assets/home/collections/op.jpg';

export default function Collections(): JSX.Element {
  const { error, loading, models } = useTypedSelector(state => state.model);

  const modelsSlice = models.slice(0, 3);

  return (
    <div className={styles.divCollections}>
      <h2 className={styles.collectionH2}>Новая коллекция</h2>
      <section className={styles.collections}>
        {modelsSlice.map(model => {
          return (
            <div className={styles.collection}>
              <div className={styles.collectionDiv}>
                <img src={model.modelImg} alt='' />
                <div className={styles.cardImg}>
                  {model.img.map(img => {
                    return (
                      <div className={styles.cardImg_div}>
                        <img src={img.toString()} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <h4>{model.name}</h4>
              <span>{model.price.toString()} ₽</span>
            </div>
          );
        })}
      </section>

      <Link className={styles.linkStore} to='/shop'>
        <button>Открыть магазин </button>
      </Link>
    </div>
  );
}
