import React from 'react';
import renderer from 'react-test-renderer';
import SearchFilter from './../../public/components/SearchFilter';

describe('SearchFilter', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<SearchFilter />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
