import React from 'react';
import renderer from 'react-test-renderer';
import FoundMovies from './../../public/components/FoundMovies';

describe('FoundMovies', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<FoundMovies />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
