import { Link } from 'react-router-dom';
import styles from './Shop.module.css';

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
      </div>
    </main>
  );
}
