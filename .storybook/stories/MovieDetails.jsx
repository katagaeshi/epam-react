import React from 'react';
import {
  Provider,
  connect,
} from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from '../../public/store';

import MovieDetails from '../../public/components/containers/MovieDetails';
import RunningTitle from '../../public/components/ui/RunningTitle';

import storeInitialState from '../../public/store/initialState.json';

const { store } = configureStore(storeInitialState);

storiesOf('MovieDetails', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Example of movie', () => (
      <div>
        <RunningTitle/>
        <MovieDetails
          poster_path='https://image.tmdb.org/t/p/w500/jBibISmRBUO35p0Picv0nOo33sc.jpg'
          title='Title'
          vote_average='7.3'
          release_date='2014-01-05'
          tagline='Trust No One'
          runtime='168'
          overview='Jack Ryan, as a young covert CIA analyst, uncovers a Russian plot to crash the U.S. economy with a terrorist attack.'
          onClick={() => {}}
          notFound={false}
          location={{pathname:''}}
          match={{path:''}}
        />
        <RunningTitle/>
      </div>
    )
  );
