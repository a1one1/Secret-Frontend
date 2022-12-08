import { combineReducers } from 'redux';
import { modelsReducer } from './shopReducer';

export const rootReducer = combineReducers({
  model: modelsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
