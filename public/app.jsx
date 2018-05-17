import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  hashHistory,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

// store
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';


import MainPage from './components/containers/MainPage';

const mode = process.env.NODE_ENV;

const component404 = () => (<h1>404</h1>);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hashHistory}>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={MainPage}
            />
            <Route
              component={component404}
            />
          </Switch>
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
