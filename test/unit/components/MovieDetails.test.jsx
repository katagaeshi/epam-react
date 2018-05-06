import MovieDetails from 'public/components/MovieDetails';

describe('MovieDetails', () => {
  it('Snapshot', () => {
    const tree = shallow(<MovieDetails
      src="www.example.com"
      title="Jay and Pikachu Strike Back"
      rating="6.9"
      year={2001}
      tag="movieForNerds"
      duration="01:31"
      description="Probably the most popular anime in the world"
    />);
    expect(tree).toMatchSnapshot();
  });
});
