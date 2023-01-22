import { Dispatch } from 'redux';
import { IModel } from '../types/IModel';
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
          const localStorageParse: IModel[] = JSON.parse(localStorageGet!);

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

export const addModel = (modelAddBasket: IModel) => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();

    if (!state.user.id) {
      const localStorageGet = localStorage.getItem('basket');
      const localStorageParse: IModel[] = JSON.parse(localStorageGet!);

      if (!localStorageGet) {
        localStorage.removeItem('basket');

        localStorage.setItem('basket', JSON.stringify([modelAddBasket]));

        dispatch({
          type: userActionTypes.ADD_MODEL,
          payload: [modelAddBasket],
        });
      }
      if (localStorageParse) {
        const lsAddBasket: IModel[] = [...localStorageParse!, modelAddBasket];

        let tmpArray: any[] = [];

        function itemCheck(item: any) {
          if (tmpArray.indexOf(item.uniqueId) === -1) {
            tmpArray.push(item.uniqueId);

            return true;
          }

          return false;
        }

        const basketIncludes = lsAddBasket.filter((item: any) =>
          itemCheck(item)
        );

        localStorage.setItem('basket', JSON.stringify(basketIncludes));

        dispatch({
          type: userActionTypes.ADD_MODEL,
          payload: basketIncludes,
        });
      }
    } else {
      let includesArray: any[] = [];

      const totalModel = [...state.user.basket, modelAddBasket];

      function itemCheck(item: any) {
        if (includesArray.indexOf(item.uniqueId) === -1) {
          includesArray.push(item.uniqueId);

          return true;
        }

        return false;
      }

      const basketIncludes = totalModel.filter((item: any) => itemCheck(item));

      dispatch({
        type: userActionTypes.ADD_MODEL,
        payload: basketIncludes,
      });

      const response = await fetch(
        `http://localhost:3000/user/${state.user.id}`,
        {
          method: 'POST',
          body: JSON.stringify({
            basket: basketIncludes,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
    }
  };
};

export const removeModel = (modelRemoveBasket: IModel) => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();

    const basketFilter = state.user.basket.filter(
      (model: IModel) => model.uniqueId !== modelRemoveBasket.uniqueId
    );

    if (!state.user.id) {
      const localStorageGet = localStorage.getItem('basket');

      if (localStorageGet) {
        localStorage.setItem('basket', JSON.stringify(basketFilter));

        dispatch({
          type: userActionTypes.REMOVE_MODEL,
          payload: basketFilter,
        });
      }
    } else {
      dispatch({
        type: userActionTypes.REMOVE_MODEL,
        payload: basketFilter,
      });

      const response = await fetch(
        `http://localhost:3000/user/${state.user.id}`,
        {
          method: 'POST',
          body: JSON.stringify({
            basket: basketFilter,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
    }
  };
};

export const AmountPlus = (modelRemoveBasket: IModel) => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();

    const basketMap = state.user.basket.map((model: IModel) => {
      if (model.uniqueId === modelRemoveBasket.uniqueId) {
        if (model.amount < model.size.rest) {
          model.amount = model.amount + 1;
        }
      }
      return model;
    });

    if (!state.user.id) {
      const localStorageGet = localStorage.getItem('basket');

      if (localStorageGet) {
        localStorage.setItem('basket', JSON.stringify(basketMap));

        dispatch({
          type: userActionTypes.AMOUNT,
          payload: basketMap,
        });
      }
    } else {
      dispatch({
        type: userActionTypes.AMOUNT,
        payload: basketMap,
      });
      const response = await fetch(
        `http://localhost:3000/user/${state.user.id}`,
        {
          method: 'POST',
          body: JSON.stringify({
            basket: basketMap,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
    }
  };
};

export const AmountMinus = (modelRemoveBasket: IModel) => {
  return async (dispatch: Dispatch<userAction>, getState: any) => {
    const state = getState();

    const basketMap = state.user.basket.map((model: IModel) => {
      if (model.uniqueId === modelRemoveBasket.uniqueId) {
        if (model.amount > 1) {
          model.amount = model.amount - 1;
        }
      }
      return model;
    });

    if (!state.user.id) {
      const localStorageGet = localStorage.getItem('basket');

      if (localStorageGet) {
        localStorage.setItem('basket', JSON.stringify(basketMap));

        dispatch({
          type: userActionTypes.AMOUNT,
          payload: basketMap,
        });
      }
    } else {
      dispatch({
        type: userActionTypes.AMOUNT,
        payload: basketMap,
      });
      const response = await fetch(
        `http://localhost:3000/user/${state.user.id}`,
        {
          method: 'POST',
          body: JSON.stringify({
            basket: basketMap,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
    }
  };
};
