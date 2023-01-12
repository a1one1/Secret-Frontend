import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthHeader.module.css';
import telephone from '../../../../assets/header/telephone.svg';
import useActions from '../../../../redux/hooks/useActionUser';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';

export default function Authorization(): JSX.Element {
  const { id, login, basket } = useTypedSelector(state => state.user);

  const [signInActive, setSignInActive] = useState<Boolean>(false);
  const [signUpActive, setSignUpActive] = useState<Boolean>(false);

  const { fetchUser } = useActions();

  function handleAuth() {}

  return (
    <div className={styles.auth}>
      <img className={styles.img} src={telephone} alt='' />
      <div>
        {/* <Link
          onClick={() => {
            handleAuth();
            // fetchUser();
          }}
          to='/authorization'
        >
          Войти
        </Link> */}
        <a
          className={styles.authA}
          onClick={() => {
            setSignInActive(true);
          }}
        >
          Войти
        </a>
      </div>
      <SignIn
        signInActive={signInActive}
        setSignInActive={setSignInActive}
        setSignUpActive={setSignUpActive}
      />
      <SignUp
        signUpActive={signUpActive}
        setSignUpActive={setSignUpActive}
        setSignInActive={setSignInActive}
      />
    </div>
  );
}
