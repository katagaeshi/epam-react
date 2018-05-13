import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonGroup from './RadioButtonGroup';
import '../../styles/SearchFilter.css';

const filterText = 'SEARCH BY';

const SearchFilter = props => (
  <div className="SearchFilter">
    <span>{filterText}</span>
    <RadioButtonGroup idPrefix="SearchFilter" {...props} />
  </div>
);

SearchFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.string,
  idPrefix: PropTypes.string,
};

SearchFilter.defaultProps = {
  options: ['TITLE', 'GENRE'],
  idPrefix: 'SearchFilter-',
};

export default SearchFilter;
