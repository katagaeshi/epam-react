import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import initialState from './initialState.json';
import appReducer from './reducers';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default compose(applyMiddleware(
  thunk,
  logger,
))(createStore)(appReducer, initialState);
