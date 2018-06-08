// @flow

import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'localforage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createStore, compose, applyMiddleware } from 'redux';
import appReducer from './reducers';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = (store: {
  getState: () => {},
}) => (next: (action: {}) => {}) => (action: { type: string }) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducer = persistReducer(persistConfig, appReducer);

export default (state: {}) => {
  const store = compose(applyMiddleware(
    thunk,
    logger,
  ))(createStore)(reducer, state);
  return {
    store,
  };
};
