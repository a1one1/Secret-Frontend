import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const [passwordInput, setPasswordInput] = useState(false);
  const [successAuth, setSuccessAuth] = useState<JSX.Element>(<></>);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data: any) => {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      body: JSON.stringify({ ...data, basket: [] }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();

    if (response.status === 200) {
      setSuccessAuth(<p style={{ color: '#6e9c9f' }}>{json}</p>);
    } else {
      setSuccessAuth(<p style={{ color: 'red' }}>{json}</p>);
    }

    reset();
  };

  return (
    <div
      className={
        signUpActive ? `${styles.modal} ${styles.active}` : styles.modal
      }
    >
      <div
       
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.authInputs}>
            <input
              onClick={() => setSuccessAuth(<></>)}
              placeholder='Логин'
              type='text'
              {...register('login', {
                required: 'Поле обязательно к заполнению',
                pattern: {
                  value: /^([a-zA-Z0-9 _-]+)$/,
                  message: 'Введите латинские символы',
                },
                minLength: {
                  value: 5,
                  message: 'Должно быть минимум 5 символов.',
                },
              })}
            />
            <div className={styles.loginErrors}>
              {errors?.login && (
                <p>{errors.login?.message?.toString() || 'Erorr!'}</p>
              )}
            </div>
            <input
              onClick={() => setSuccessAuth(<></>)}
              placeholder='Пароль'
              type={passwordInput ? 'text' : 'password'}
              {...register('password', {
                required: 'Поле обязательно к заполнению',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/,
                  message:
                    'Пароль должен содержать цифры, заглавные и прописные буквы латинского алфавита',
                },
                minLength: {
                  value: 5,
                  message: 'Должно быть минимум 5 символов.',
                },
              })}
            />
            <div style={{ height: '48px' }} className={styles.loginErrors}>
              {errors?.password && (
                <p>{errors.password?.message?.toString() || 'Erorr!'}</p>
              )}
            </div>
            <a
              className={
                passwordInput
                  ? `${styles.eyesInput} ${styles.view}`
                  : styles.eyesInput
              }
              onClick={() => {
                setPasswordInput(!passwordInput);
              }}
            ></a>
            <div className={styles.signUp}>
              <input
                onClick={() => {}}
                type='submit'
                disabled={!isValid}
                value='Зарегистрироваться'
              />
            </div>
            <div className={styles.successAuth}>{successAuth}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
