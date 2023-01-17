import React, { useState } from 'react';
import styles from './SignIn.module.css';
import { useForm } from 'react-hook-form';
import useActions from '../../../../../redux/hooks/useActionUser';

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
  const [passwordInput, setPasswordInput] = useState(false);
  const [successAuth, setSuccessAuth] = useState<JSX.Element>();
  const { fetchUserToken } = useActions();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data: any) => {
    // const response = await fetch('http://localhost:3000/user', {
    //   method: 'POST',
    //   body: JSON.stringify({ ...data, basket: [] }),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // });
    // const json = await response.json();

    // if (response.status === 200) {
    //   setSuccessAuth(<p style={{ color: '#6e9c9f' }}>{json}</p>);
    // } else {
    //   setSuccessAuth(<p style={{ color: 'red' }}>{json}</p>);

    // }

    await fetchUserToken(data);

    // location.reload();

    setSuccessAuth(<p style={{ color: '#6e9c9f' }}>dadad</p>);
    reset();
  };

  return (
    <div
      className={
        signInActive ? `${styles.modal} ${styles.active}` : styles.modal
      }
    >
      <div
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.authInputs}>
            <input
              onClick={() => setSuccessAuth(undefined)}
              placeholder='Логин'
              type='text'
              {...register('login', {
                // required: 'Поле обязательно к заполнению',
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
              onClick={() => setSuccessAuth(undefined)}
              placeholder='Пароль'
              type={passwordInput ? 'text' : 'password'}
              {...register('password', {
                // required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 5,
                  message: 'Должно быть минимум 5 символов.',
                },
              })}
            />
            <div style={{ height: '48px' }} className={styles.loginErrors}>
              {successAuth
                ? successAuth
                : errors?.password && (
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
                // disabled={!isValid}
                value='Войти'
              />
              <p>
                Нет учетной записи?{' '}
                <a
                  onClick={() => {
                    setSignInActive(false);
                    setSignUpActive(true);
                  }}
                  style={{
                    textDecoration: 'underline',
                  }}
                >
                  Зарегистрироваться
                </a>
              </p>
            </div>
            {/* <div className={styles.successAuth}>{successAuth}</div> */}
          </div>
        </form>
      </div>
    </div>
  );
}
