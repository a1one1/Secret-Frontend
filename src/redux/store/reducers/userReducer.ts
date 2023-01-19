import { IUser } from '../types/IUser';
import { IUserState, userAction, userActionTypes } from '../types/user';

const initialState: IUserState = {
  basket: [],
  id: '',
  login: '',
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

    case userActionTypes.ADD_USER:
      return {
        ...state,
        basket: aciton.payload,
      };

    case userActionTypes.FETCH_USER:
      const localStorageGet = localStorage.getItem('basket');

      if (localStorageGet) {
        const localParse: IUser[] = JSON.parse(localStorageGet!);
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

    // console.log(state.basket);

    // console.log(aciton.payload.basket);

    case userActionTypes.SIGNOUT_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        id: '',
        login: '',
      };
    // case userActionTypes.FETCH_USER_FETCH:
    //   return {
    //     id: aciton.payload.id,
    //     login: aciton.payload.login,
    //     basket: [...state.basket, ...aciton.payload.basket],
    //     error: null,
    //   };

    case userActionTypes.FETCH_USER_ERROR_AUTZLOGIN:
      return { ...state, error: aciton.error };

    case userActionTypes.REMOVE_ERROR:
      return { ...state, error: null };
    // case userActionTypes.FETCH_MODELS_ERROR:
    //   return { loading: false, error: aciton.payload, models: [] };
    default:
      return state;
  }
};
