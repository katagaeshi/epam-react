import MovieTile from 'public/components/ui/MovieTile';

describe('MovieTile', () => {
  it('Snapshot', () => {
    const tree = shallow(<MovieTile
      src="www.example.com"
      title="Pokemon"
      year={2001}
      genre="Anime"
      idx={1}
      genres={['headbanger movies', 'impossible brutality']}
    />);
    expect(tree).toMatchSnapshot();
  });
});
