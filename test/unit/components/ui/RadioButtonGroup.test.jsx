import RadioButtonGroup from 'public/components/ui/RadioButtonGroup';

describe('RadioButtonGroup', () => {
  it('Snapshot', () => {
    const tree = shallow(<RadioButtonGroup
      options={['Pikachu', 'Charmander']}
      checked="Pikachu"
      idPrefix="radioButtonTest"
      onUpdate={() => {}}
    />);
    expect(tree).toMatchSnapshot();
  });
});
