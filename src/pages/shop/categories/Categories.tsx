import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { iModels } from '../../../redux/store/types/IModels';
import { modelsActionTypes } from '../../../redux/store/types/model';
import styles from './Categories.module.css';
import SkeletonCat from './SkeletonCat';
interface CategoriesProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export default function Categories({ setCurrentPage }: CategoriesProps) {
  const { loading, models, categories } = useTypedSelector(
    state => state.model
  );
  const dispatch = useDispatch();
  const [categoriesId, setCategoriesId] = useState(0);

  function handleCategoriesId(index: number, categoriesName: any) {
    setCurrentPage(1);
    setCategoriesId(index);
    dispatch({
      type: modelsActionTypes.MODELS_FILTER,
      payload: categoriesName,
    });
  }

  useEffect(() => {
    return () => {
      dispatch({
        type: modelsActionTypes.MODELS_FILTER,
        payload: 'Все',
      });
    };
  }, [loading]);

  return (
    <section>
      {' '}
      <div className={styles.categories}>
        <ul>
          {loading ? (
            [...new Array(5)].map((_, index) => <SkeletonCat key={index} />)
          ) : (
            <div className={styles.liWrapper}>
              {categories.map((item, index) => (
                <li key={item._id}>
                  <button
                    onClick={() => handleCategoriesId(index, item.name)}
                    className={
                      categoriesId == index
                        ? styles.categoriesBtnACT
                        : styles.categoriesBtn
                    }
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </div>
          )}
        </ul>
      </div>
    </section>
  );
}
