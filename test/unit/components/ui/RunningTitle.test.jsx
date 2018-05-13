import RunningTitle from 'public/components/ui/RunningTitle';

describe('RunningTitle', () => {
  it('Snapshot', () => {
    const tree = shallow(<RunningTitle
      text="netflixroulette"
    />);
    expect(tree).toMatchSnapshot();
  });
});
