import React from 'react';
import { shallow } from 'enzyme';
import OrderFailure from './OrderFailure';

describe('OrderFailure', () => {
  it('renders correctly', () => {
    expect(shallow(<OrderFailure />)).toMatchSnapshot();
  });
});
