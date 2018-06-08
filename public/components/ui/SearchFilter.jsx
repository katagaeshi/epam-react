import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import RadioButtonGroup from './RadioButtonGroup';

const styles = {
  searchFilter: {
    'grid-row': '3',
    'grid-column': '1 / 1',
  },
};

const filterText = 'SEARCH BY';

const SearchFilter = props => (
  <div className={props.classes.searchFilter}>
    <span>{filterText}</span>
    <RadioButtonGroup idPrefix="SearchFilter" {...props} />
  </div>
);

SearchFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  idPrefix: PropTypes.string,
  classes: PropTypes.shape({
    searchFilter: PropTypes.string,
  }).isRequired,
};

SearchFilter.defaultProps = {
  options: ['TITLE', 'GENRE'],
  idPrefix: 'SearchFilter-',
};

export default injectSheet(styles)(SearchFilter);
