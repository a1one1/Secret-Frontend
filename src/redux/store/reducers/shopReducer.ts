import { IModelState, modelAction, modelsActionTypes } from '../types/model';

const initialState: IModelState = {
  models: [],
  loading: false,
  error: null,
};

export const modelsReducer = (
  state = initialState,
  aciton: modelAction
): IModelState => {
  switch (aciton.type) {
    case modelsActionTypes.FETCH_MODELS:
      return { loading: true, error: null, models: [] };
    case modelsActionTypes.FETCH_MODELS_SUCCESS:
      return { loading: false, error: null, models: aciton.payload };
    case modelsActionTypes.FETCH_MODELS_ERROR:
      return { loading: false, error: aciton.payload, models: [] };
    default:
      return state;
  }
};
