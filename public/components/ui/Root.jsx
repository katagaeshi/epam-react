// @flow

import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot, setConfig } from 'react-hot-loader';
import injectSheet from 'react-jss';

import ErrorBoundary from './ErrorBoundary';
import MainPage from './../containers/MainPage';

const styles = {};

type Props = {
  Router: () => any,
  location: string,
  context: {
    url: string,
  },
  store: {
    dispatch: () => {},
    getState: () => {},
  },
};

const Root = ({
  Router,
  store,
  location,
  context,
}: Props) => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router location={location} context={context}>
        <Route path="/" component={MainPage} />
      </Router>
    </Provider>
  </ErrorBoundary>
);

Root.defaultProps = {
  location: null,
  context: null,
};

setConfig({ logLevel: 'debug' });

export default hot(module)(injectSheet(styles)(Root));
