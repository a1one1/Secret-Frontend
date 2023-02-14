import { IModelState, modelAction, modelsActionTypes } from '../types/model';

const initialState: IModelState = {
  models: [],
  modelsFilter: [],
  categories: [],
  loading: true,
  error: null,
};

export const modelsReducer = (
  state = initialState,
  aciton: modelAction
): IModelState => {
  switch (aciton.type) {
    case modelsActionTypes.FETCH_MODELS:
      return {
        ...state,
        loading: true,
        error: null,
        models: [],
        categories: [],
        modelsFilter: [],
      };
    case modelsActionTypes.FETCH_MODELS_SUCCESS:
      return {
        loading: false,
        error: null,
        models: aciton.payload.models,
        categories: aciton.payload.categories,
        modelsFilter: aciton.payload.models,
      };

    case modelsActionTypes.MODELS_FILTER:
      const modelsFilter = state.models.filter(
        model => model.categoriesId.name === aciton.payload
      );

      if (aciton.payload === 'Все') {
        return {
          ...state,
          modelsFilter: state.models,
        };
      }

      return {
        ...state,
        modelsFilter: modelsFilter,
      };

    case modelsActionTypes.FETCH_MODELS_ERROR:
      return {
        loading: true,
        error: aciton.payload,
        models: [],
        categories: [],
        modelsFilter: [],
      };

    default:
      return state;
  }
};
