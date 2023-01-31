import React, { useState } from 'react';
import styles from './Collections.module.css';
import collections from '../../../assets/home/collections/christopher-campbell.png';
import arrow from '../../../assets/home/collections/arrow.svg';
import { Link, NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import collections1 from '../../../assets/home/collections/op.jpg';
import { iModels } from '../../../redux/store/types/IModels';

export default function Collections(): JSX.Element {
  const { error, loading, models } = useTypedSelector(state => state.model);

  console.log(models);

  const modelsSlice = models.slice(0, 3);

  function handleModel(model: iModels) {
    localStorage.setItem('model', JSON.stringify(model));
  }

  return (
    <div className={styles.divCollections}>
      <h2 className={styles.collectionH2}>Новая коллекция</h2>
      <section className={styles.collections}>
        {modelsSlice.map(model => (
          <div
            onClick={() => {
              handleModel(model);
            }}
            key={model._id}
            className={styles.collection}
          >
            <div className={styles.collectionDiv}>
              <NavLink to={`/oneModel`}>
                <img src={model.modelImg} alt='' />
                <div className={styles.cardImg}>
                  {model.img.map((img, index) => (
                    <div key={index} className={styles.cardImg_div}>
                      <img src={img.toString()} />
                    </div>
                  ))}
                </div>
              </NavLink>
            </div>
            <h4>{model.name}</h4>
            {model.discount ? (
              <div className={styles.modelDiscountDiv}>
                <span className={`${styles.modelPrice} ${styles.discountTrue}`}>
                  {model.price.toString()} ₽
                </span>
                <span className={styles.modelDiscount}>
                  {model.discount.toString()} ₽
                </span>
              </div>
            ) : (
              <span className={styles.modelPrice}>
                {model.price.toString()} ₽
              </span>
            )}
          </div>
        ))}
      </section>
      <Link className={styles.linkStore} to='/shop'>
        <button>Открыть магазин </button>
      </Link>
    </div>
  );
}
