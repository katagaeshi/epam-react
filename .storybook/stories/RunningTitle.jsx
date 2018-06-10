import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  configure,
} from '@storybook/react';

import RunningTitle from '../../public/components/ui/RunningTitle';

storiesOf('RunningTitle', module)
  .add('with text', () => (
    <RunningTitle
      text='Example of title'
    />
  ));
