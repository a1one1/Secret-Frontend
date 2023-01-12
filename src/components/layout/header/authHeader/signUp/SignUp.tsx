import React from 'react';
import styles from './SignUp.module.css';
interface ISignIn {
  signUpActive: Boolean;
  setSignUpActive: (value: React.SetStateAction<Boolean>) => void;
  setSignInActive: (value: React.SetStateAction<Boolean>) => void;
}

export default function SignUp({
  signUpActive,
  setSignUpActive,
  setSignInActive,
}: ISignIn) {
  return (
    <div
      onClick={() => {
        setSignUpActive(false);
      }}
      className={
        signUpActive ? `${styles.modal} ${styles.active}` : styles.modal
      }
    >
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={
          signUpActive
            ? `${styles.modal_content} ${styles.active}`
            : styles.modal_content
        }
      >
        <button
          onClick={() => {
            setSignUpActive(false);
          }}
          className={styles.modalX}
        >
          ⨉
        </button>
        <h3>Авторизация</h3>
        <div className={styles.authInputs}>
          <input placeholder='Логин' type='text' name='' id='' />
          <input placeholder='Пароль' type='text' name='' id='' />
        </div>
        <div className={styles.signUp}>
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}
