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
  FETCH_USER = 'FETCH_USER',
  LOCAL_STORAGE_ADD = 'LOCAL_STORAGE_ADD',
}
interface LocalStorageAddAction {
  type: userActionTypes.LOCAL_STORAGE_ADD;
  payload: IUser[];
}
interface FetchUserAction {
  type: userActionTypes.FETCH_USER;
  payload: any;
}

export type userBasketAction = FetchUserAction | LocalStorageAddAction;
