import React, { SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { modelsActionTypes } from '../../../redux/store/types/model';
import styles from './Categories.module.css';
import SkeletonCat from './SkeletonCat';
interface CategoriesProps {
  currentPage: number;
  setCurrentPage: (value: SetStateAction<number>) => void;
}

export default function Categories({ setCurrentPage }: CategoriesProps): JSX.Element {
  const { loading, categories } = useTypedSelector(state => state.model);
  const dispatch = useDispatch();
  const [categoriesId, setCategoriesId] = useState<number>(0);

  function handleCategoriesId(index: number, categoriesName: string) {
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
              {categories.map((categories, index) => (
                <li key={categories._id}>
                  <button
                    onClick={() => handleCategoriesId(index, categories.name)}
                    className={
                      categoriesId == index
                        ? styles.categoriesBtnACT
                        : styles.categoriesBtn
                    }
                  >
                    {categories.name}
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
