import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Authorization from './authorization/Authorization';
import Basket from './basket/Basket';
import logo from '../../../assets/header/logo.svg';

export default function Footer(): JSX.Element {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLog}>
          <img src={logo} alt='dress' />
          <div>Secret</div>
        </div>
        <nav>
          <Link to='/'>
            <p className={styles.pHeader}>Главная</p>
          </Link>
          <Link to='/shop'>
            <p>Магазин</p>
          </Link>
          <Link to='/brand'>
            <p>О бренде</p>
          </Link>
          <Link to='/contacts'>
            <p>Контакты</p>
          </Link>
        </nav>
        <div className={styles.authAndBasket}>
          <Authorization />
          <Basket />
        </div>
      </div>
    </header>
  );
}
