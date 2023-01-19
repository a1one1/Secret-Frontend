import { Dispatch } from 'redux';
import { IUser } from '../types/IUser';
import { userActionTypes, userAction, IUserState } from './../types/user';

export const fetchUserToken = (data: any) => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();

    try {
      const responseLogin = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      });

      const jsonLogin = await responseLogin.json();

      if (responseLogin.status === 200) {
        const responseUser = await fetch(
          'http://localhost:3000/localStorageUser',
          {
            method: 'POST',
            body: JSON.stringify({
              basket: state.user.basket,
            }),
            headers: {
              Authorization: `Bearer ${jsonLogin.token}`,
              'Content-type': 'application/json',
            },
          }
        );

        localStorage.setItem('token', jsonLogin.token);
        location.reload();
      }

      if (responseLogin.status === 401) {
        dispatch({
          type: userActionTypes.FETCH_USER_ERROR_AUTZLOGIN,
          error: jsonLogin,
        });
      }
    } catch (e: any) {
      console.log(e.toString());
    }
  };
};

export const fetchUser = () => {
  return async (dispatch: Dispatch<userAction>) => {
    try {
      const response = await fetch('http://localhost:3000/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const json: IUserState | string = await response.json();

      if (typeof json === 'object') {
        dispatch({
          type: userActionTypes.FETCH_USER,
          payload: json,
        });
      } else {
        const localStorageGet = localStorage.getItem('basket');

        const localStorageParse: IUser[] = JSON.parse(localStorageGet!);

        dispatch({
          type: userActionTypes.LOCAL_STORAGE_ADD,
          payload: localStorageParse,
        });
      }

      // if (response.status === 401) {
      //   dispatch({
      //     type: userActionTypes.FETCH_USER_ERROR_AUTZLOGIN,
      //     error: json,
      //   });
      // }

      // return localStorage.setItem('token', json.token);
    } catch (e) {
      console.log(e);

      // dispatch({
      //   type: modelsActionTypes.FETCH_MODELS_ERROR,
      //   payload: 'произошла ошибка при загрузке  моделей',
      // });
    }
  };
};

export const addUser = (modelAddBasket: IUser) => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();

    const response = await fetch(
      `http://localhost:3000/user/${state.user.id}`,
      {
        method: 'POST',
        body: JSON.stringify({
          basket: [...state.user.basket, modelAddBasket],
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    const json = await response.json();

    console.log(json);

    return dispatch({
      type: userActionTypes.ADD_USER,
      payload: [...state.user.basket, modelAddBasket],
    });
  };
};
