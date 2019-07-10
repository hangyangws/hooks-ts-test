/*===================
  Button.unit.test.tsx
 ===================*/

import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const handleClickBtn = () => {
  alert('Click button.');
};

describe('Button', () => {
  it('Renders button', () => {
    const button = shallow(<Button onClick={handleClickBtn}>Button</Button>);
    expect(button).toMatchSnapshot();
  });
});