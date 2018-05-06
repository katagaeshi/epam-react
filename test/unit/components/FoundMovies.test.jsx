import FoundMovies from 'public/components/FoundMovies';

describe('FoundMovies', () => {
  it('Snapshot (without movies)', () => {
    const tree = shallow(<FoundMovies />);
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot (with movies)', () => {
    const tree = shallow(<FoundMovies
      movies={[
        {
          title: 'Robocop: Winter Soldier',
        },
        {
          title: 'Lord of The Rings: Return of Joker',
        },
      ]}
      total="Let's see what we've found:"
    />);
    expect(tree).toMatchSnapshot();
  });
});
