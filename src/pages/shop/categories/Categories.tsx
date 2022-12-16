import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { iModels } from '../../../redux/store/types/Imodels';
import styles from './Categories.module.css';
interface CategoriesProps {
  modelSt: iModels[];
  setModelSt: (value: iModels[]) => void;
}

export default function Categories({ modelSt, setModelSt }: CategoriesProps) {
  const { error, loading, models } = useTypedSelector(state => state.model);
  const [categories, setCategories] = useState<any>([]);
  const [categoriesId, setCategoriesId] = useState(0);

  async function fetchCategories() {
    const response = await axios.get('http://localhost:3000/categories');

    setCategories(response.data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  function handleCategoriesId(index: number, categoriesName: any) {
    if (categoriesName === 'Все') {
      setModelSt([...models]);
      return;
    }

    setCategoriesId(index);

    setModelSt(
      models.filter(item => item.categoriesId.name === categoriesName)
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
        {categories.map((item, index) => {
          return (
            <li key={item._id}>
              <button
                onClick={() => handleCategoriesId(index + 1, item.name)}
                className={
                  categoriesId == index + 1
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
