// @flow

import React from 'react';

import RadioButtonGroup from './RadioButtonGroup';

const labelText = 'Sort by';

type Props = {
  options: Array<string>,
  checked: string,
  idPrefix: string,
};

const ResultsSort = (props: Props) => (
  <div>
    <label htmlFor="ResultsSort">{labelText}
      <RadioButtonGroup idPrefix="ResultsSort" {...props} />
    </label>
  </div>
);

ResultsSort.defaultProps = {
  options: ['release date', 'rating'],
  checked: 'release date',
  idPrefix: 'ResultsSort-',
};

export default ResultsSort;
