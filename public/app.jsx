import React from 'react';
import { hydrate } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

// store
import configureStore from './store';

// import './styles/reset.css';


import Root from './components/ui/Root';

const mode = process.env.NODE_ENV;

const { store } = configureStore(window.PRELOADED_STATE);

hydrate(
  <Root
    Router={BrowserRouter}
    store={store}
  />,
  document.getElementById('root'),
);
