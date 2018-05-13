import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import MainPage from './components/containers/MainPage';

const mode = process.env.NODE_ENV;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainPage />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
