import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import ErrorBoundary from './ErrorBoundary';
import MainPage from './../containers/MainPage';

const Root = ({
  Router,
  store,
  location,
  context,
}) => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router location={location} context={context}>
        <Route path="/" component={MainPage} />
      </Router>
    </Provider>
  </ErrorBoundary>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);
