import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';

enzyme.configure({ adapter: new Adapter() });

it('renders the correct text when count is not given', () => {
  const hello = enzyme.shallow(<Counter name="counter1" />);
  expect(hello.find('.counter').text()).toEqual('Counter counter1: 1');
});

it('renders the correct text when count is given', () => {
  const hello = enzyme.shallow(<Counter name="counter1" count={5} />);
  expect(hello.find('.counter').text()).toEqual('Counter counter1: 5');
});
