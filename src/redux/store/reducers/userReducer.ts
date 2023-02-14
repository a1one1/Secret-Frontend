import { IModel } from '../types/IModel';
import { IUserState, userAction, userActionTypes } from '../types/user';

const initialState: IUserState = {
  basket: [],
  id: '',
  login: localStorage.getItem('login'),
  error: null,
  token: null,
};

export const userReducer = (
  state = initialState,
  aciton: userAction
): IUserState => {
  switch (aciton.type) {
    case userActionTypes.LOCAL_STORAGE_ADD:
      if (!state.login) {
        return {
          ...state,
          basket: aciton.payload,
        };
      }

    case userActionTypes.ADD_MODEL:
      return {
        ...state,
        basket: aciton.payload,
      };

    case userActionTypes.REMOVE_MODEL:
      return {
        ...state,
        basket: aciton.payload,
      };

    case userActionTypes.AMOUNT:
      return {
        ...state,
        basket: aciton.payload,
      };

    case userActionTypes.FETCH_USER:
      const localStorageGet = localStorage.getItem('basket');

      if (localStorageGet) {
        const localParse: IModel[] = JSON.parse(localStorageGet!);

        localStorage.removeItem('basket');

        return {
          ...state,
          id: aciton.payload.id,
          login: aciton.payload.login,
          basket: [...localParse, ...aciton.payload.basket],
        };
      } else {
        return {
          ...state,
          id: aciton.payload.id,
          login: aciton.payload.login,
          basket: aciton.payload.basket,
        };
      }

    case userActionTypes.SIGNOUT_USER:
      localStorage.removeItem('token');
      localStorage.removeItem('login');

      location.reload();

      return {
        ...state,
        id: '',
        login: '',
      };

    case userActionTypes.FETCH_USER_ERROR_AUTZLOGIN:
      return { ...state, error: aciton.error };

    case userActionTypes.REMOVE_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};
