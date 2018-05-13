import ResultsSort from 'public/components/ui/ResultsSort';

describe('ResultsSort', () => {
  it('Snapshot', () => {
    const tree = shallow(<ResultsSort
      onUpdate={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });
});
