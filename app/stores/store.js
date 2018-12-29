import { createStore } from 'redux';
import { rootReducer } from '../reducers/reducer';

// This connects the reducer to the store
export const configureStore = () => {
  return createStore(rootReducer);
}