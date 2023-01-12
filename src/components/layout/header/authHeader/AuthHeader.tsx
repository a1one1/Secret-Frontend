import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthHeader.module.css';
import telephone from '../../../../assets/header/telephone.svg';
import useActions from '../../../../redux/hooks/useActionUser';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

export default function Authorization(): JSX.Element {
  const { id, login, basket } = useTypedSelector(state => state.user);

  const { fetchUser } = useActions();

  function handleAuth() {}

  return (
    <div className={styles.auth}>
      <img className={styles.img} src={telephone} alt='' />
      <div>
        <Link
          onClick={() => {
            handleAuth();
            // fetchUser();
          }}
          to='/authorization'
        >
          Войти
        </Link>
        
      </div>
    </div>
  );
}
