import SearchPanel from 'public/components/SearchPanel';

describe('SearchPanel', () => {
  it('Snapshot', () => {
    const tree = shallow(<SearchPanel />);
    expect(tree).toMatchSnapshot();
  });
});
