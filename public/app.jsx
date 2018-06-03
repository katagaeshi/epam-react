import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter as Router,
  hashHistory,
} from 'react-router-dom';

// store
import configureStore from './store';
import initialState from './store/initialState.json';

import './styles/reset.css';


import Root from './components/ui/Root';

const mode = process.env.NODE_ENV;

const { store, persistor } = configureStore(initialState);

ReactDOM.render(
  <Root
    Router={Router}
    store={store}
    persistor={persistor}
    history={hashHistory}
  />,
  document.getElementById('root'),
);
