import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonGroup from './RadioButtonGroup';

const labelText = 'SEARCH BY';

const SearchFilter = props => (
  <div>
    <label htmlFor="SearchFilter">{labelText}
      <RadioButtonGroup id="SearchFilter" {...props} />
    </label>
  </div>
);

SearchFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.string,
};

SearchFilter.defaultProps = {
  options: ['Title', 'Director'],
  checked: 'Title',
};

export default SearchFilter;
