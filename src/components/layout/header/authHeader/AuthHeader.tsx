import React, { useEffect, useState } from 'react';
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
  }

  return (
    <div className={styles.auth}>
      <img className={styles.img} src={telephone} alt='' />
      <div className={styles.authSwag}>
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
          <a>{login}</a>
        )}
        {login ? (
          <a
            className={styles.authA}
            onClick={() => {
              handleSignOut();
            }}
          >
            Выйти
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
