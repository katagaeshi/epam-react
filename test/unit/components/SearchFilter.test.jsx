import SearchFilter from 'public/components/SearchFilter';

describe('SearchFilter', () => {
  it('Snapshot', () => {
    const tree = shallow(<SearchFilter />);
    expect(tree).toMatchSnapshot();
  });
});
