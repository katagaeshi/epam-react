import React from 'react';
import renderer from 'react-test-renderer';
import SearchPanel from './../../public/components/SearchPanel';

describe('SearchPanel', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<SearchPanel />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
