import styles from './Header.module.css';
import AuthHeader from './authHeader/AuthHeader';
import Basket from './basket/BasketHeader';
import logo from '../../../assets/header/logo.svg';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import useActionsUser from '../../../redux/hooks/useActionUser';
import useActionsModel from '../../../redux/hooks/useActionModels';

export default function Header(): JSX.Element {
  const { fetchUser } = useActionsUser();
  const { fetchModels } = useActionsModel();

  useEffect(() => {
    fetchUser();
    fetchModels();
  }, []);

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
            to={`/shop`}
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
          <AuthHeader />

          <Basket />
        </div>
      </div>
    </header>
  );
}
