import React from 'react';
import renderer from 'react-test-renderer';
import RunningTitle from './../../public/components/RunningTitle';

describe('RunningTitle', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<RunningTitle />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
