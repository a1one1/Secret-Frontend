import { iModels } from './Imodels';

export interface IModelState {
  models: iModels[];
  loading: boolean;
  error: null | string;
}
interface IModelAction {
  type: string;
  payload?: any;
}
export enum modelsActionTypes {
  FETCH_MODELS = 'FETCH_MODELS',
  FETCH_MODELS_SUCCESS = 'FETCH_MODELS_SUCCESS',
  FETCH_MODELS_ERROR = 'FETCH_MODELS_ERROR',
}
interface FetchModelsAction {
  type: modelsActionTypes.FETCH_MODELS;
}
interface FetchModelsSuccessAction {
  type: modelsActionTypes.FETCH_MODELS_SUCCESS;
  payload: iModels[];
}
interface FetchModelsErrorAction {
  type: modelsActionTypes.FETCH_MODELS_ERROR;
  payload: string;
}
export type modelAction =
  | FetchModelsAction
  | FetchModelsSuccessAction
  | FetchModelsErrorAction;
