import React, { useState } from 'react';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import styles from './Categories.module.css';

export default function Categories() {
  const { error, loading, models } = useTypedSelector(state => state.model);
  const [categoriesId, setCategoriesId] = useState(0);

  function handleCategoriesId(i: number, categoriesName: any) {
    setCategoriesId(i);
    models.map((item, index) => {
      if (item.categoriesId.name === categoriesName) {
        return item;
      }
    });
  }

  return (
    <div className={styles.categories}>
      <ul>
        <li>
          <button
            onClick={() => {
              setCategoriesId(0);
            }}
            className={
              categoriesId == 0 ? styles.categoriesBtnACT : styles.categoriesBtn
            }
          >
            Все
          </button>
        </li>
        {models.map((item, i) => {
          return (
            <li key={i}>
              <button
                onClick={() =>
                  handleCategoriesId(i + 1, item.categoriesId.name)
                }
                className={
                  categoriesId == i + 1
                    ? styles.categoriesBtnACT
                    : styles.categoriesBtn
                }
              >
                {item.categoriesId.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
