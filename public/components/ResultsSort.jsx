import React from 'react';
import PropTypes from 'prop-types';
import RadioButtonGroup from './RadioButtonGroup';

const labelText = 'Sort by';

const ResultsSort = props => (
  <div>
    <label htmlFor="ResultsSort">{labelText}
      <RadioButtonGroup id="ResultsSort" {...props} />
    </label>
  </div>
);

ResultsSort.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.string,
  idPrefix: PropTypes.string,
};

ResultsSort.defaultProps = {
  options: ['release date', 'rating'],
  checked: 'release date',
  idPrefix: 'ResultsSort-',
};

export default ResultsSort;
