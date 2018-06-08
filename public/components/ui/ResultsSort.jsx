import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import RadioButtonGroup from './RadioButtonGroup';

const styles = {};

const labelText = 'Sort by';

const ResultsSort = props => (
  <div>
    <label htmlFor="ResultsSort">{labelText}
      <RadioButtonGroup idPrefix="ResultsSort" {...props} />
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

export default injectSheet(styles)(ResultsSort);
