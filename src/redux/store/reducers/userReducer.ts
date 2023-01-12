import { IUserState, userAction, userActionTypes } from '../types/user';

const initialState: IUserState = {
  basket: [],
  id: '',
  login: '',
  error: null,
};

export const userReducer = (
  state = initialState,
  aciton: userAction
): IUserState => {
  switch (aciton.type) {
    case userActionTypes.LOCAL_STORAGE_ADD:
      return {
        ...initialState,
        basket: aciton.payload,
      };
    case userActionTypes.FETCH_USER:
      return {
        ...initialState,
        basket: aciton.payload,
      };
    case userActionTypes.FETCH_USER_FETCH:
      return {
        id: aciton.payload.id,
        login: aciton.payload.login,
        basket: [...state.basket, ...aciton.payload.basket],
        error: null,
      };

    // case userActionTypes.FETCH_USER_ERROR_AUTZLOGIN:
    //   return { loading: false, error: null, user: aciton.payload };
    // case userActionTypes.FETCH_MODELS_ERROR:
    //   return { loading: false, error: aciton.payload, models: [] };
    default:
      return state;
  }
};
