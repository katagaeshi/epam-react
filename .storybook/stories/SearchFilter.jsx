import React from 'react';
import {
  Provider,
  connect
} from 'react-redux';
import { storiesOf } from '@storybook/react';

import configureStore from '../../public/store';

import SearchFilter from '../../public/components/ui/SearchFilter';

import { setSearchBy } from '../../public/actions';

import storeInitialState from '../../public/store/initialState.json';

const { store } = configureStore(storeInitialState);


const mapStateToProps = state => {
  return {
    options: ['TITLE', 'GENRE'],
    checked: state.searchPanel.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onUpdate(changeEvent) {
    dispatch(setSearchBy(changeEvent.target.value));
  },
});

const SearchFilterContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFilter);

storiesOf('SearchFilter', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('with 2 options', () => (
      <SearchFilterContainer
        idPrefix='RBG_2_options'
        checked='TITLE'
      />
    )
  );
