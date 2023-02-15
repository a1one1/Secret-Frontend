import React, { useState } from 'react';
import styles from './AuthHeader.module.css';

import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import { useDispatch } from 'react-redux';
import { userActionTypes } from '../../../../redux/store/types/user';

export default function Authorization(): JSX.Element {
  const { login } = useTypedSelector(state => state.user);

  const dispatch = useDispatch();

  const [signInActive, setSignInActive] = useState<Boolean>(false);
  const [signUpActive, setSignUpActive] = useState<Boolean>(false);

  async function handleSignOut() {
    await dispatch({ type: userActionTypes.SIGNOUT_USER });
  }

  return (
    <div className={styles.auth}>
      <div className={styles.authSwag}>
        {!login ? (
          <div>
            <a
              className={styles.authA}
              onClick={() => {
                setSignInActive(true);
              }}
            >
              Войти
            </a>
          </div>
        ) : (
          <div className={styles.login}>
            <div className={styles.loginChild}>{login}</div>
          </div>
        )}
        {login ? (
          <div className={styles.loginOut}>
            <div
              className={styles.loginOutChild}
              onClick={() => {
                handleSignOut();
              }}
            >
              Выйти
            </div>
          </div>
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
