import { combineReducers } from 'redux';
import { modelsReducer } from './shopReducer';
export const rootReducer =combineReducers({
  model:modelsReducer
})