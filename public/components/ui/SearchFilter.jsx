// @flow

import React from 'react';
import injectSheet from 'react-jss';
import RadioButtonGroup from './RadioButtonGroup';

const styles = {
  searchFilter: {
    'grid-row': '3',
    'grid-column': '1 / 1',
  },
};

const filterText = 'SEARCH BY';

type Props = {
  options: Array<string>,
  idPrefix: string,
  classes: {
    searchFilter: string,
  },
};

const SearchFilter = (props: Props) => (
  <div className={props.classes.searchFilter}>
    <span>{filterText}</span>
    <RadioButtonGroup idPrefix="SearchFilter" {...props} />
  </div>
);

SearchFilter.defaultProps = {
  options: ['TITLE', 'GENRE'],
  idPrefix: 'SearchFilter-',
};

export default injectSheet(styles)(SearchFilter);
