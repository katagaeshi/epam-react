import SearchField from 'public/components/SearchField';

describe('SearchField', () => {
  it('Snapshot', () => {
    const tree = shallow(<SearchField
      handleChange={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });
});
