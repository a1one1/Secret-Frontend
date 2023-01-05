import { Dispatch } from 'redux';
import { userActionTypes, userAction } from './../types/user';

export const fetchUser = () => {
  return async (dispatch: Dispatch<userAction>) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
          login: 'Akela',
          password: 'qwer',
        }),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const json = await response.json();

      if (response.status === 401) {
        dispatch({
          type: userActionTypes.FETCH_USER_ERROR_AUTZLOGIN,
          payload: json,
        });
      }

      dispatch({
        type: userActionTypes.FETCH_USER_FETCH,
        payload: json,
      });
    } catch (e) {
      console.log(e);

      // dispatch({
      //   type: modelsActionTypes.FETCH_MODELS_ERROR,
      //   payload: 'произошла ошибка при загрузке  моделей',
      // });
    }
  };
};
