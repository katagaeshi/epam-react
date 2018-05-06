import React from 'react';
import renderer from 'react-test-renderer';
import RadioButtonGroup from './../../public/components/RadioButtonGroup';

describe('RadioButtonGroup', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(
        <RadioButtonGroup
          options={['Pikachu', 'Charmander']}
          checked="Pikachu"
          idPrefix="radioButtonTest"
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
