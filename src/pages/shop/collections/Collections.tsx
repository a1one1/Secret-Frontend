import axios from 'axios';
import React, { useEffect } from 'react';
import useActions from '../../../redux/hooks/useActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import styles from './Collections.module.css';

export default function Collections(): JSX.Element {
  const { error, loading, models } = useTypedSelector(state => state.model);
  const { fetchModels } = useActions();

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <div>
      <div className={styles.showCollections}>
        <p>
          {/* {models.length < 9 ? '' : ` Показано: 9 из ${models.length} товаров`} */}
          Показано: 9 из 12 товаров
        </p>
      </div>
      <div className={styles.collectionsShop}>
        {models.map(item => {
          return (
            <div key={item.id} className={styles.collection}>
              <div className={styles.collectionDiv}>
                <img src={item.modelImg} alt='' />
              </div>
              <h4>{item.name}</h4>
              <span className={`bg-blue`}>$129</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
