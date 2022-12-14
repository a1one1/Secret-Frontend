import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { iModels } from '../../../redux/store/types/Imodels';
import styles from './Categories.module.css';
interface CategoriesProps {
  modelSt: iModels[];
  setModelSt: (value: iModels[]) => void;
}

export default function Categories(props: CategoriesProps) {
  const { error, loading, models } = useTypedSelector(state => state.model);
  const [categories, setCategories] = useState<any[]>([]);
  const [categoriesId, setCategoriesId] = useState(0);

  async function fetchCategories() {
    const response = await axios.get('http://localhost:3000/categories');

    setCategories(response.data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  function handleCategoriesId(i: number, categoriesName: any) {
    if (categoriesName === 'Все') {
      props.setModelSt([...models]);
      return;
    }
    setCategoriesId(i);
    props.setModelSt(
      models.filter((item, index) => item.categoriesId.name === categoriesName)
    );
  }

  return (
    <div className={styles.categories}>
      <ul>
        <li>
          <button
            onClick={() => {
              handleCategoriesId(0, 'Все');
              setCategoriesId(0);
            }}
            className={
              categoriesId == 0 ? styles.categoriesBtnACT : styles.categoriesBtn
            }
          >
            Все
          </button>
        </li>
        {categories.map((item, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => handleCategoriesId(i + 1, item.name)}
                className={
                  categoriesId == i + 1
                    ? styles.categoriesBtnACT
                    : styles.categoriesBtn
                }
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
