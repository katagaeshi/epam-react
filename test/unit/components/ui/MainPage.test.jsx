import MainPage from 'public/components/ui/MainPage';

describe('MainPage', () => {
  it('Snapshot', () => {
    const tree = shallow(<MainPage
      activePanel="SearchPanel"
      onEnter={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });
});
