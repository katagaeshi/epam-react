import MainPage from 'public/components/MainPage';

describe('MainPage', () => {
  it('Snapshot', () => {
    const tree = shallow(<MainPage />);
    expect(tree).toMatchSnapshot();
  });
});
