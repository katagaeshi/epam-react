import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './components/MainPage';

const mode = process.env.NODE_ENV;

ReactDOM.render(
  <MainPage />,
  document.getElementById('root'),
);
