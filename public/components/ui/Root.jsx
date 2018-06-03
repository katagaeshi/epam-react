import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import { PersistGate } from 'redux-persist/integration/react';

import ErrorBoundary from './ErrorBoundary';
import MainPage from './../containers/MainPage';

const Root = ({
  Router,
  store,
  persistor,
  history,
}) => (
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Route path="/" component={MainPage} />
        </Router>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
  persistor: PropTypes.shape({}),
  history: PropTypes.shape({}),
};

Root.defaultProps = {
  persistor: {},
  history: {},
};

export default hot(module)(Root);
