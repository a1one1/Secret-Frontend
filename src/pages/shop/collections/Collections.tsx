import React, { useEffect, useState } from 'react';
import useActions from '../../../redux/hooks/useActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { IModels } from '../../../redux/store/types/Imodels';
import styles from './Collections.module.css';
import Pagination from './Pagination/Pagination';

interface CollectionsProps {
  modelSt: IModels[];
  setModelSt: (value: IModels[]) => void;
  models: IModels[];
}

export default function Collections({
  models,
  modelSt,
  setModelSt,
}: CollectionsProps): JSX.Element {
  const { fetchModels } = useActions();
  const [currentPage, setCurrentPage] = useState(1);
  const [modelsPerPage] = useState(9);
  const [shop, setShop] = useState({});

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
      return setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div>
      <div className={styles.showCollections}>
        <p>
          {modelSt.length < 9
            ? ` Показано: ${modelSt.length} товар`
            : ` Показано: 9 из ${modelSt.length} товаров`}
        </p>
      </div>
      <div className={styles.collectionsShop}>
        {currentModels.map(item => {
          return (
            <div
              onClick={() => {
                handleModel(item);
              }}
              key={item._id}
              className={styles.collection}
            >
              <div className={styles.collectionDiv}>
                <img src={item.modelImg} alt='' />
              </div>
              <h4>{item.name}</h4>
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
