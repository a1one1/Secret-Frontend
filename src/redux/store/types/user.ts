import { IUser } from './IUser';

export interface IUserState {
  basket: IUser[];
  id: String;
  login: string;
  error?: null | string;
  token?: null | string;
}

export interface IUserPayload {
  basket: IUser[];
  id: String;
  login: string;
  exp: number;
  iat: number;
  error: null | string;
}

export enum userActionTypes {
  FETCH_USER_TOKEN = 'FETCH_USER_FETCH_TOKEN',
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_ERROR_AUTZLOGIN = 'FETCH_USER_ERROR_AUTZLOGIN',
  FETCH_MODELS_ERROR = 'FETCH_USER_ERROR',

  LOCAL_STORAGE_ADD = 'LOCAL_STORAGE_ADD',
  ADD_USER = ' ADD_USER',

  op = 'op',
}
interface LocalStorageAddAction {
  type: userActionTypes.LOCAL_STORAGE_ADD;
  payload: IUser[];
}
interface FetchUserAction {
  type: userActionTypes.FETCH_USER;
  payload: any;
}

interface AddUserAction {
  type: userActionTypes.ADD_USER;
  payload: IUser[];
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

interface op {
  type: userActionTypes.op;
}
export type userAction =
  | op
  | AddUserAction
  | FetchUserAction
  | LocalStorageAddAction
  | FetchUserFetchAction
  | FetchUserErrorAutzLoginAction
  | FetchUserErrorAction;
