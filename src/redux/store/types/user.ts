import { IModel } from './IModel';

export interface IUserState {
  basket: IModel[];
  id: String;
  login: string;
  error?: null | string;
  token?: null | string;
}

export enum userActionTypes {
  FETCH_USER_TOKEN = 'FETCH_USER_FETCH_TOKEN',
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_ERROR_AUTZLOGIN = 'FETCH_USER_ERROR_AUTZLOGIN',
  FETCH_MODELS_ERROR = 'FETCH_USER_ERROR',

  LOCAL_STORAGE_ADD = 'LOCAL_STORAGE_ADD',
  ADD_MODEL = ' ADD_MODEL',
  REMOVE_MODEL = ' REMOVE_MODEL',

  SIGNOUT_USER = 'SIGNOUT_USER',
  REMOVE_ERROR = 'REMOVE_ERROR',

  AMOUNT = ' AMOUNT',
}
interface LocalStorageAddAction {
  type: userActionTypes.LOCAL_STORAGE_ADD;
  payload: IModel[];
}
interface FetchUserAction {
  type: userActionTypes.FETCH_USER;
  payload: any;
}

interface AddModelAction {
  type: userActionTypes.ADD_MODEL;
  payload: IModel[];
}

interface RemoveModelAction {
  type: userActionTypes.REMOVE_MODEL;
  payload: IModel[];
}

interface AmountModelAction {
  type: userActionTypes.AMOUNT;
  payload: IModel[];
}

interface FetchUserFetchAction {
  type: userActionTypes.FETCH_USER_TOKEN;
  token: string;
}

interface FetchUserErrorAutzLoginAction {
  type: userActionTypes.FETCH_USER_ERROR_AUTZLOGIN;
  error: string;
}
interface FetchUserErrorAction {
  type: userActionTypes.FETCH_MODELS_ERROR;
  payload: string;
}

interface RemoveError {
  type: userActionTypes.REMOVE_ERROR;
}

interface SignOutUSer {
  type: userActionTypes.SIGNOUT_USER;
}

export type userAction =
  | AmountModelAction
  | RemoveModelAction
  | RemoveError
  | SignOutUSer
  | AddModelAction
  | FetchUserAction
  | LocalStorageAddAction
  | FetchUserFetchAction
  | FetchUserErrorAutzLoginAction
  | FetchUserErrorAction;
