// @flow

import React from 'react';
import { hydrate } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import configureStore from './store';

import Root from './components/ui/Root';

const { store } = configureStore(window.PRELOADED_STATE);

const rootElement = document.getElementById('root');
if (rootElement) {
  hydrate(
    <Root
      Router={BrowserRouter}
      store={store}
    />,
    rootElement,
    () => {
      if (window.mode !== 'development') {
        const ssStyles = document.getElementById('server-side-styles');
        if (ssStyles && ssStyles.parentNode) {
          ssStyles.parentNode.removeChild(ssStyles);
        }
      }
    },
  );
} else {
  throw new Error('root element not found');
}

