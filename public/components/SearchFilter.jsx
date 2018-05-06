import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonGroup from './RadioButtonGroup';
import '../styles/SearchFilter.css';

const labelText = 'SEARCH BY';

const SearchFilter = props => (
  <div className="SearchFilter">
    <label htmlFor="SearchFilter">{labelText}
      <RadioButtonGroup idPrefix="SearchFilter" {...props} />
    </label>
  </div>
);

SearchFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.string,
  idPrefix: PropTypes.string,
};

SearchFilter.defaultProps = {
  options: ['TITLE', 'GENRE'],
  checked: 'TITLE',
  idPrefix: 'SearchFilter-',
};

export default SearchFilter;
