import React from 'react';
import { hydrate } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import configureStore from './store';

import Root from './components/ui/Root';

const { store } = configureStore(window.PRELOADED_STATE);

hydrate(
  <Root
    Router={BrowserRouter}
    store={store}
  />,
  document.getElementById('root'),
  () => {
    if (window.mode !== 'development') {
      const ssStyles = document.getElementById('server-side-styles');
      ssStyles.parentNode.removeChild(ssStyles);
    }
  },
);
