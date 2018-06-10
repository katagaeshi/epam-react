import {
  Provider,
  connect
} from 'react-redux';
import configureStore from '../../public/store';

import {
  storiesOf,
  configure,
} from '@storybook/react';
import { action } from '@storybook/addon-actions';

function loadStories() {
  require('./RunningTitle');
  require('./SearchFilter');
  require('./MovieDetails');
}

configure(loadStories, module);
