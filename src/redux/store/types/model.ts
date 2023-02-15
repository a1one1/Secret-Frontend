import { iCategories, iModels } from './IModels';

export interface IModelState {
  models: iModels[];
  modelsFilter: iModels[];
  categories: iCategories[];
  loading: boolean;
  error: null | string | boolean;
}
interface IModelAction {
  type: string;
  payload?: any;
}
export enum modelsActionTypes {
  FETCH_MODELS = 'FETCH_MODELS',
  FETCH_MODELS_SUCCESS = 'FETCH_MODELS_SUCCESS',
  FETCH_MODELS_ERROR = 'FETCH_MODELS_ERROR',

  MODELS_FILTER = 'MODELS_FILTER',
}
interface FetchModelsAction {
  type: modelsActionTypes.FETCH_MODELS;
}
interface FetchModelsSuccessAction {
  type: modelsActionTypes.FETCH_MODELS_SUCCESS;
  payload: {
    models: iModels[];
    categories: iCategories[];
  };
}
interface FetchModelsErrorAction {
  type: modelsActionTypes.FETCH_MODELS_ERROR;
  payload: string;
}

interface ModelsFilter {
  type: modelsActionTypes.MODELS_FILTER;
  payload: string;
}

export type modelAction =
  | ModelsFilter
  | FetchModelsAction
  | FetchModelsSuccessAction
  | FetchModelsErrorAction;
