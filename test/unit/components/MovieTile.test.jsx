import MovieTile from 'public/components/MovieTile';

describe('MovieTile', () => {
  it('Snapshot', () => {
    const tree = shallow(<MovieTile
      src="www.example.com"
      title="Pokemon"
      year={2001}
      genre="Anime"
    />);
    expect(tree).toMatchSnapshot();
  });
});
