import { Dispatch } from 'redux';
import { modelsActionTypes, modelAction } from './../types/model';
import axios from 'axios';
export const fetchModels = () => {
  return async (dispatch: Dispatch<modelAction>) => {
    try {
      dispatch({ type: modelsActionTypes.FETCH_MODELS });
      const response = await axios.get('http://localhost:3000/clothes');
      console.log(response);

      dispatch({
        type: modelsActionTypes.FETCH_MODELS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);

      dispatch({
        type: modelsActionTypes.FETCH_MODELS_ERROR,
        payload: 'произошла ошибка при загрузке  моделей',
      });
    }
  };
};
