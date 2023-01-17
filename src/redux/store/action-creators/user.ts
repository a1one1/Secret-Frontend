import { Dispatch } from 'redux';
import { IUser } from '../types/IUser';
import { userActionTypes, userAction, IUserState } from './../types/user';

export const fetchUserToken = (data: any) => {
  return async (dispatch: Dispatch<userAction>) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
          login: 'Smait',
          password: 'ismait3310',
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });

      const json = await response.json();

      if (response.status === 401) {
        dispatch({
          type: userActionTypes.FETCH_USER_ERROR_AUTZLOGIN,
          error: json,
        });
      }

      return localStorage.setItem('token', json.token);
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchUser = () => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();
    try {
      const response = await fetch('http://localhost:3000/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const json: IUserState = await response.json();

      console.log(json);

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
