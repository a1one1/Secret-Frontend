import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import AuthHeader from './authHeader/AuthHeader';
import Basket from './basket/Basket';
import logo from '../../../assets/header/logo.svg';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { userActionTypes } from '../../../redux/store/types/user';
import { IUser } from '../../../redux/store/types/IUser';

export default function Header(): JSX.Element {
  const dispatch = useDispatch();

  const localStorageGet = localStorage.getItem('basket');

  const localStorageParse: IUser[] = JSON.parse(localStorageGet!);

  useEffect(() => {
    dispatch({
      type: userActionTypes.LOCAL_STORAGE_ADD,
      payload: localStorageParse,
    });
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
          <AuthHeader />
          <Basket />
        </div>
      </div>
    </header>
  );
}
