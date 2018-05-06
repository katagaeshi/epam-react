import ResultsSort from 'public/components/ResultsSort';

describe('ResultsSort', () => {
  it('Snapshot', () => {
    const tree = shallow(<ResultsSort />);
    expect(tree).toMatchSnapshot();
  });
});
