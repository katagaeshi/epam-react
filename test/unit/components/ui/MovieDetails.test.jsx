import MovieDetails from 'public/components/ui/MovieDetails';

describe('MovieDetails', () => {
  it('Snapshot', () => {
    const tree = shallow(<MovieDetails
      poster_path="www.example.com"
      title="Jay and Pikachu Strike Back"
      vote_average="6.9"
      release_date="a long time ago"
      tagline="movieForNerds"
      runtime="01:31"
      overview="Probably the most popular anime in the world"
    />);
    expect(tree).toMatchSnapshot();
  });
});
