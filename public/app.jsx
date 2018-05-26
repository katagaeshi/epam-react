import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  hashHistory,
  Route,
  Switch,
} from 'react-router-dom';

// store
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import './styles/reset.css';


import MainPage from './components/containers/MainPage';

const mode = process.env.NODE_ENV;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hashHistory}>
        <div>
          <Switch>
            <Route
              path="/"
              component={MainPage}
            />
          </Switch>
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
