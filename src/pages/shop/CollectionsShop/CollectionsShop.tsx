import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import useActions from '../../../redux/hooks/useActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { IModels } from '../../../redux/store/types/Imodels';
import styles from './CollectionsShop.module.css';
import Pagination from './Pagination/Pagination';

interface CollectionsProps {
  modelSt: IModels[];
  setModelSt: (value: IModels[]) => void;
  models: IModels[];
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

  function handleModel(model: IModels) {
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
          // console.log(model.colors[0].img);

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
                  <img src={model.colors[0].img.toString()} alt='' />
                </NavLink>
              </div>

              <h4>{model.name}</h4>
              <span className={`bg-blue`}>$129</span>
            </div>
          );
        })}
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
