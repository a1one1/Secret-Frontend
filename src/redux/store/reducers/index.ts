import { combineReducers } from 'redux';
import { modelsReducer } from './shopReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  model: modelsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
