import { IUser } from './IUser';

export interface IUserState {
  basket: IUser[];
  id: String;
  login: string;
  error: null | string;
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
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_FETCH = 'FETCH_USER_FETCH',
  FETCH_USER_ERROR_AUTZLOGIN = 'FETCH_USER_ERROR_AUTZLOGIN',
  FETCH_MODELS_ERROR = 'FETCH_USER_ERROR',
}

interface FetchUserAction {
  type: userActionTypes.FETCH_USER;
  payload: IUser;
}

interface FetchUserFetchAction {
  type: userActionTypes.FETCH_USER_FETCH;
  payload: IUserPayload;
}

interface FetchUserErrorAutzLoginAction {
  type: userActionTypes.FETCH_USER_ERROR_AUTZLOGIN;
  payload: string;
}
interface FetchUserErrorAction {
  type: userActionTypes.FETCH_MODELS_ERROR;
  payload: string;
}
export type userAction =
  | FetchUserAction
  | FetchUserFetchAction
  | FetchUserErrorAutzLoginAction
  | FetchUserErrorAction;
