import React, { useEffect, useState } from 'react';
import styles from './SignIn.module.css';
import { useForm } from 'react-hook-form';
import useActions from '../../../../../redux/hooks/useActionUser';
import { useTypedSelector } from '../../../../../redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { userActionTypes } from '../../../../../redux/store/types/user';

interface ISignIn {
  signInActive: Boolean;
  setSignInActive: (value: React.SetStateAction<Boolean>) => void;
  setSignUpActive: (value: React.SetStateAction<Boolean>) => void;
}

export default function SignIn({
  signInActive,
  setSignInActive,
  setSignUpActive,
}: ISignIn) {
  const dispatch = useDispatch();
  const { error } = useTypedSelector(state => state.user);
  const { fetchUserToken } = useActions();

  const [passwordInput, setPasswordInput] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  const onSubmit = async (data: any) => {
    await fetchUserToken(data);
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
              onClick={() => {
                dispatch({ type: userActionTypes.REMOVE_ERROR });
              }}
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
              {error ||
                (errors?.login && (
                  <p>{errors.login?.message?.toString() || 'Erorr!'}</p>
                ))}
            </div>
            <input
              onClick={() => {
                dispatch({ type: userActionTypes.REMOVE_ERROR });
              }}
              placeholder='Пароль'
              type={passwordInput ? 'text' : 'password'}
              {...register('password', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 5,
                  message: 'Должно быть минимум 5 символов.',
                },
              })}
            />
            <div style={{ height: '48px' }} className={styles.loginErrors}>
              {error ||
                (errors?.password && (
                  <p>{errors.password?.message?.toString() || 'Erorr!'}</p>
                ))}
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
            <div className={styles.signIn}>
              <input type='submit' disabled={!isValid} value='Войти' />
              <p>
                Нет учетной записи?
                <a
                  onClick={() => {
                    setSignInActive(false);
                    setSignUpActive(true);
                  }}
                  style={{
                    textDecoration: 'underline',
                    marginLeft: '5px',
                    color: '#6e9c9f',
                  }}
                >
                  Зарегистрироваться
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
