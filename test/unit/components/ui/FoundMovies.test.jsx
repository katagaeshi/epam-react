import FoundMovies from 'public/components/ui/FoundMovies';

describe('FoundMovies', () => {
  it('Snapshot (without movies)', () => {
    const tree = shallow(<FoundMovies
      option="release_date"
      onSortUpdate={() => {}}
      onMovieClick={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot (with movies)', () => {
    const tree = shallow(<FoundMovies
      movies={[
        {
          title: 'Robocop: Winter Soldier',
          genres: ['cyberpunk'],
        },
        {
          title: 'Lord of The Rings: Return of Joker',
          genres: ['dieselpunk'],
        },
      ]}
      total="Let's see what we've found:"
      option="release_date"
      onSortUpdate={() => {}}
      onMovieClick={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });
});
