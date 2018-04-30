import React from 'react';
import ReactDOM from 'react-dom';

import SearchPanel from './components/SearchPanel';

const mode = process.env.NODE_ENV;

ReactDOM.render(
  <SearchPanel />,
  document.getElementById('root'),
);
