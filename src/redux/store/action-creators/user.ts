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

        if (localStorageGet) {
          const localStorageParse: IUser[] = JSON.parse(localStorageGet!);

          dispatch({
            type: userActionTypes.LOCAL_STORAGE_ADD,
            payload: localStorageParse,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const addModel = (modelAddBasket: IUser) => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();

    let tmpArray: any[] = [];

    const totalModel = [...state.user.basket, modelAddBasket];

    function itemCheck(item: any) {
      if (tmpArray.indexOf(item.uniqueId) === -1) {
        tmpArray.push(item.uniqueId);

        return true;
      }

      return false;
    }

    

    const basketInclude = totalModel.filter((item: any) => itemCheck(item));

    console.log(basketInclude);

    // const response = await fetch(
    //   `http://localhost:3000/user/${state.user.id}`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       basket: basketInclude,
    //     }),
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //   }
    // );

    return dispatch({
      type: userActionTypes.ADD_MODEL,
      payload: basketInclude,
    });
  };
};
