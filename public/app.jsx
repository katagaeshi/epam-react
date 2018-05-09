import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import initialState from './store/initialState.json';
import appReducer from './store/reducers';
import MainPage from './components/MainPage';

const mode = process.env.NODE_ENV;

const store = createStore(appReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root'),
);
