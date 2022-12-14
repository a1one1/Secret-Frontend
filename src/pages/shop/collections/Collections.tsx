import React, { useEffect, useState } from 'react';
import useActions from '../../../redux/hooks/useActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { iModels } from '../../../redux/store/types/Imodels';
import styles from './Collections.module.css';
import Pogination from './pagination/Pagination';

interface CollectionsProps {
  modelSt: iModels[];
  setModelSt: (value: iModels[]) => void;
}

export default function Collections(props: CollectionsProps): JSX.Element {
  const { error, loading, models } = useTypedSelector(state => state.model);
  const { fetchModels } = useActions();
  const [currentPage, setCurrentPage] = useState(1);
  const [modelsPerPage] = useState(9);

  useEffect(() => {
    fetchModels();
    props.setModelSt([...models]);
  }, []);

  const lastModelsIndex = currentPage * modelsPerPage;
  const firstModelsIndex = lastModelsIndex - modelsPerPage;
  let currentModels = props.modelSt.slice(firstModelsIndex, lastModelsIndex);

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
          {props.modelSt.length < 9
            ? ` Показано: ${props.modelSt.length} товар`
            : ` Показано: 9 из ${props.modelSt.length} товаров`}
        </p>
      </div>
      <div className={styles.collectionsShop}>
        {currentModels.map(item => {
          return (
            <div key={item._id} className={styles.collection}>
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
          {props.modelSt.length < 9
            ? ''
            : ` Показано: 9 из ${props.modelSt.length} товаров`}
        </p>
      </div>
      {props.modelSt.length > 9 ? (
        <Pogination
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
