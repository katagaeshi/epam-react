import SearchField from 'public/components/ui/SearchField';

describe('SearchField', () => {
  it('Snapshot', () => {
    const tree = shallow(<SearchField
      handleChange={() => {}}
      onEnter={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });
});
