import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  HashRouter as Router,
  hashHistory,
  Route,
} from 'react-router-dom';

// store
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import ErrorBoundary from './components/ui/ErrorBoundary';

import './styles/reset.css';


import MainPage from './components/containers/MainPage';

const mode = process.env.NODE_ENV;

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={hashHistory}>
          <Route path="/" component={MainPage} />
        </Router>
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
