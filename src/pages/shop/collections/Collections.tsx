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
    <div className={styles.collectionsShop}>
      {models.map(item => {
        console.log(item);
        return (
          <div key={item.id} className={styles.collection}>
            <div className={styles.collectionDiv}>
              {/* <img src={item.colors.white.img} alt='' /> */}
            </div>
            <h4>{item.name}</h4>
            <span>$129</span>
          </div>
        );
      })}
    </div>
  );
}
