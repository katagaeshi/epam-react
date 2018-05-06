import React from 'react';
import renderer from 'react-test-renderer';
import MovieTile from './../../public/components/MovieTile';

describe('MovieTile', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<MovieTile
        src="www.example.com"
        title="Pokemon"
        year={2001}
        genre="Anime"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
