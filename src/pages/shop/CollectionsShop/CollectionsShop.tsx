import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import useActionModels from '../../../redux/hooks/useActionModels';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { iModels } from '../../../redux/store/types/IModels';
import useActions from '../../../redux/hooks/useActionModels';
import styles from './CollectionsShop.module.css';
import Pagination from './Pagination/Pagination';

interface CollectionsProps {
  modelSt: iModels[];
  setModelSt: (value: iModels[]) => void;
  models: iModels[];
  currentPage: number;
  setCurrentPage: (value: any) => void;
  modelsPerPage: number;
}

export default function Collections({
  modelsPerPage,
  currentPage,
  setCurrentPage,
  models,
  modelSt,
}: CollectionsProps): JSX.Element {
  const { error, loading } = useTypedSelector(state => state.model);
  const { fetchModels } = useActions();

  if (error) {
  }

  function handleModel(model: iModels) {
    localStorage.setItem('model', JSON.stringify(model));
  }

  useEffect(() => {
    fetchModels();
  }, []);

  const lastModelsIndex = currentPage * modelsPerPage;
  const firstModelsIndex = lastModelsIndex - modelsPerPage;
  let currentModels = modelSt.slice(firstModelsIndex, lastModelsIndex);

  function paginate(pageNumber: number) {
    return setCurrentPage(pageNumber);
  }

  const nextPage = () => {
    const currentPages = Math.ceil(models.length / modelsPerPage) - 1;

    if (currentPages > currentPage) {
      return setCurrentPage((prev: number) => prev + 1);
    }
  };

  return (
    <div>
      <div className={styles.showCollections}>
        <p>
          {modelSt.length == 1 ? ` Показан: ${modelSt.length} товар` : null}
          {modelSt.length == 2 ? ` Показано: ${modelSt.length} товара` : null}
          {modelSt.length == 3 ? ` Показано: ${modelSt.length} товара` : null}
          {modelSt.length == 4 ? ` Показано: ${modelSt.length} товара` : null}
          {/* {modelSt.length >= 5 ? ` Показано: ${modelSt.length} товаров` : null} */}
          {modelSt.length > 9
            ? ` Показано: 9 из ${modelSt.length} товаров`
            : null}
        </p>
      </div>
      <div className={styles.collectionsShop}>
        {currentModels.map(model => {
          return (
            <div
              onClick={() => {
                handleModel(model);
              }}
              key={model._id}
              className={styles.collection}
            >
              <div className={styles.collectionDiv}>
                <NavLink to={'/OneModel'}>
                  <img src={model.modelImg} alt='' />
                  <div className={styles.cardImg}>
                    {
                      <div className={styles.cardImg_div}>
                        <img src={model.img[0].toString()} />
                      </div>
                    }
                  </div>
                </NavLink>
              </div>
              <h4>{model.name}</h4>
              <span className={`bg-blue`}>{model.price.toString()} ₽</span>
            </div>
          );
        })}

        {/* <div className={styles.collection}>
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
        </div> */}
      </div>
      <div className={styles.showCollections}>
        <p>
          {modelSt.length < 9
            ? ''
            : ` Показано: 9 из ${modelSt.length} товаров`}
        </p>
      </div>
      {modelSt.length > 9 ? (
        <Pagination
          nextPage={nextPage}
          paginate={paginate}
          modelsPerPage={modelsPerPage}
          totalModels={models.length}
          currentPage={currentPage}
        />
      ) : (
        ''
      )}
    </div>
  );
}
