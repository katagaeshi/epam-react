import React from 'react';
import renderer from 'react-test-renderer';
import ResultsSort from './../../public/components/ResultsSort';

describe('ResultsSort', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<ResultsSort />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
