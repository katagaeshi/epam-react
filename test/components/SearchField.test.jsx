import React from 'react';
import renderer from 'react-test-renderer';
import SearchField from './../../public/components/SearchField';

describe('SearchField', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<SearchField />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
