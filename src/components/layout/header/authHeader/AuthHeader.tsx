import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthHeader.module.css';
import telephone from '../../../../assets/header/telephone.svg';
import useActions from '../../../../redux/hooks/useActionUser';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import { useDispatch } from 'react-redux';
import { userActionTypes } from '../../../../redux/store/types/user';

export default function Authorization(): JSX.Element {
  const { login } = useTypedSelector(state => state.user);

  const dispatch = useDispatch();

  const { fetchUser } = useActions();

  const [signInActive, setSignInActive] = useState<Boolean>(false);
  const [signUpActive, setSignUpActive] = useState<Boolean>(false);

  useEffect(() => {
    fetchUser();
  }, []);

  async function handleSignOut() {
    await dispatch({ type: userActionTypes.SIGNOUT_USER });
    location.reload();
  }

  return (
    <div className={styles.auth}>
      <img className={styles.img} src={telephone} alt='' />
      <div>
        {!login ? (
          <a
            className={styles.authA}
            onClick={() => {
              setSignInActive(true);
            }}
          >
            Войти
          </a>
        ) : (
          login
        )}
        {login ? (
          <a
            onClick={() => {
              handleSignOut();
            }}
          >
            выйти
          </a>
        ) : null}
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
