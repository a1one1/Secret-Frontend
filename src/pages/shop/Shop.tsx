import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useActions from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { fetchModels } from '../../redux/store/action-creators/model';
import styles from './Shop.module.css';

import Collections from './collections/Collections';
import Categories from './categories/Categories';
import { iModels } from '../../redux/store/types/Imodels';

export default function Shop(): JSX.Element {
  const { error, loading, models } = useTypedSelector(state => state.model);

  const [modelSt, setModelSt] = useState<iModels[]>([...models]);

  useEffect(() => {
    op();
  }, []);

  

  const op = () => setModelSt([...models]);
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
          <Categories modelSt={modelSt} setModelSt={setModelSt} />
        </section>
        <section>
          <Collections modelSt={modelSt} setModelSt={setModelSt} />
        </section>
      </div>
    </main>
  );
}
