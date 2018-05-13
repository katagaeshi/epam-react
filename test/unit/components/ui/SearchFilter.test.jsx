import SearchFilter from 'public/components/ui/SearchFilter';

describe('SearchFilter', () => {
  it('Snapshot', () => {
    const tree = shallow(<SearchFilter
      onUpdate={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });
});
