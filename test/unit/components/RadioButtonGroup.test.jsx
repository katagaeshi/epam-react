import RadioButtonGroup from 'public/components/RadioButtonGroup';

describe('RadioButtonGroup', () => {
  it('Snapshot', () => {
    const tree = shallow(<RadioButtonGroup
      options={['Pikachu', 'Charmander']}
      checked="Pikachu"
      idPrefix="radioButtonTest"
    />);
    expect(tree).toMatchSnapshot();
  });
});
