import { IUser } from '../types/IUser';
import { IUserState, userAction, userActionTypes } from '../types/user';

const initialState: IUserState = {
  basket: [],
  id: '',
  login: '',
  error: null,
  token: null, //localStorage.getItem('token'),
};

export const userReducer = (
  state = initialState,
  aciton: userAction
): IUserState => {
  switch (aciton.type) {
    case userActionTypes.LOCAL_STORAGE_ADD:
      if (!state.login) {
        console.log('dasda');

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
      

      // const localStorageGet = localStorage.getItem('basket');

      // const localParse: IUser[] = JSON.parse(localStorageGet!);

      // if (localParse) {
      //   localStorage.setItem(
      //     'basket',
      //     JSON.stringify([...localParse!, ...aciton.payload.basket])
      //   );
      // }

      // console.log(state.basket);

      // console.log(aciton.payload.basket);

      return {
        id: aciton.payload.id,
        login: aciton.payload.login,
        basket: [...state.basket, ...aciton.payload.basket],
        error: null,
      };
    case userActionTypes.op:
      return {
        ...state,
        id: '',
        login: '',
        error: null,
      };
    // case userActionTypes.FETCH_USER_FETCH:
    //   return {
    //     id: aciton.payload.id,
    //     login: aciton.payload.login,
    //     basket: [...state.basket, ...aciton.payload.basket],
    //     error: null,
    //   };

    // case userActionTypes.FETCH_USER_ERROR_AUTZLOGIN:
    //   return { loading: false, error: null, user: aciton.payload };
    // case userActionTypes.FETCH_MODELS_ERROR:
    //   return { loading: false, error: aciton.payload, models: [] };
    default:
      return state;
  }
};
