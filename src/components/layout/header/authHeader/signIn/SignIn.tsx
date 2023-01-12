import React from 'react';
import styles from './SignIn.module.css';

interface ISignUp {
  signInActive: Boolean;
  setSignInActive: (value: React.SetStateAction<Boolean>) => void;
  setSignUpActive: (value: React.SetStateAction<Boolean>) => void;
}

export default function SignIn({
  signInActive,
  setSignInActive,
  setSignUpActive,
}: ISignUp) {
  return (
    <div
      onClick={() => {
        setSignInActive(false);
      }}
      className={
        signInActive ? `${styles.modal} ${styles.active}` : styles.modal
      }
    >
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={
          signInActive
            ? `${styles.modal_content} ${styles.active}`
            : styles.modal_content
        }
      >
        <button
          onClick={() => {
            setSignInActive(false);
          }}
          className={styles.modalX}
        >
          ⨉
        </button>
        <h3>Вход</h3>
        <div className={styles.authInputs}>
          <input placeholder='Логин' type='text' name='' id='' />
          <input placeholder='Пароль' type='text' name='' id='' />
        </div>
        <div className={styles.signIn}>
          <button>Войти</button>
          <p>
            Нет учетной записи?{' '}
            <a
              onClick={() => {
                setSignInActive(false);
                setSignUpActive(true);
              }}
            >
              Зарегистрироваться
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
