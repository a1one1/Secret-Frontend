import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Authorization from './authorization/Authorization';
import Basket from './basket/Basket';
import logo from '../../../assets/header/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLog}>
          <img src={logo} alt='dress' />
          <div>Secret</div>
        </div>
        <nav>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? styles.activeLink : '')}
          >
            <p className={styles.pHeader}>Главная</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.activeLink : '')}
            to={`/shop` && `/OneModel`}
          >
            <p>Магазин</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.activeLink : '')}
            to='/brand'
          >
            <p>О бренде</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.activeLink : '')}
            to='/contacts'
          >
            <p>Контакты</p>
          </NavLink>
        </nav>
        <div className={styles.authAndBasket}>
          <Authorization />
          <Basket />
        </div>
      </div>
    </header>
  );
}
