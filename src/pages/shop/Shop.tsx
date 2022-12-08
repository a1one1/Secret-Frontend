import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useActions from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { fetchModels } from '../../redux/store/action-creators/model';
import styles from './Shop.module.css';

import Collections from './collections/Collections';

export default function Shop(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.shopDiv}>
        <h2>Магазин</h2>

        <div className={styles.shopRoutes}>
          <Link to={'/'}>Главная</Link>
          <div className={styles.line}>—</div>
          <div className={styles.shopItem}>Магазин</div>
        </div>
        <div>
          <Collections />
        </div>
      </div>
    </main>
  );
}
