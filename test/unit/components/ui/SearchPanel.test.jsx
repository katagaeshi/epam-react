import SearchPanel from 'public/components/ui/SearchPanel';

describe('SearchPanel', () => {
  it('Snapshot', () => {
    const tree = shallow(
      <SearchPanel
        startSearch={() => {}}
        handleSearchChange={() => {}}
        onFilterUpdate={() => {}}
        text=""
        filter=""
        sortOption=""
      />);
    expect(tree).toMatchSnapshot();
  });
});
