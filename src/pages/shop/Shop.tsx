import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import styles from './Shop.module.css';
import Collections from './CollectionsShop/CollectionsShop';
import Categories from './Categories/Categories';
import { iModels } from '../../redux/store/types/IModels';
import OneModel from './OneModel/OneModel';

export default function Shop(): JSX.Element {
  const { error, loading, models } = useTypedSelector(state => state.model);
  const [modelSt, setModelSt] = useState<iModels[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modelsPerPage] = useState(9);

  useEffect(() => {
    fetch('http://localhost:3000/clothes')
      .then(response => response.json())
      .then(data => {
        setModelSt(data);
      });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.shopDiv}>
        <h2>Магазин</h2>
        <div className={styles.shopRoutes}>
          <Link to={'/'}>Главная</Link>
          <div className={styles.line}>—</div>
          <div className={styles.shopItem}>Магазин</div>
        </div>
        <section>
          <Categories
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            modelSt={modelSt}
            setModelSt={setModelSt}
          />
        </section>
        <section>
          <Collections
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            modelsPerPage={modelsPerPage}
            models={models}
            modelSt={modelSt}
            setModelSt={setModelSt}
          />
        </section>
      </div>
    </main>
  );
}
