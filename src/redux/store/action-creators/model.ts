import { Dispatch } from 'redux';
import { modelsActionTypes, modelAction } from './../types/model';
import axios from 'axios';

export const fetchModels = () => {
  return async (dispatch: Dispatch<modelAction>) => {
    try {
      dispatch({ type: modelsActionTypes.FETCH_MODELS });

      const responseClothes = await axios.get('http://localhost:3000/clothes');

      const responseCategories = await axios.get(
        'http://localhost:3000/categories'
      );

      dispatch({
        type: modelsActionTypes.FETCH_MODELS_SUCCESS,
        payload: {
          models: responseClothes.data,
          categories: responseCategories.data,
        },
      });
    } catch (e: any) {
      dispatch({
        type: modelsActionTypes.FETCH_MODELS_ERROR,
        payload: 'произошла ошибка при загрузке  моделей',
      });
    }
  };
};
