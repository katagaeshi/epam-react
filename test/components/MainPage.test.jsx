import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './../../public/components/MainPage';

describe('MainPage', () => {
  it('Snapshot', () => {
    const tree = renderer
      .create(<MainPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
