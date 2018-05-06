import RunningTitle from 'public/components/RunningTitle';

describe('RunningTitle', () => {
  it('Snapshot', () => {
    const tree = shallow(<RunningTitle
      text="netflixroulette"
    />);
    expect(tree).toMatchSnapshot();
  });
});
