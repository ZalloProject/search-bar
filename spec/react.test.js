import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../client/src/Main.jsx';

configure({ adapter: new Adapter() });

describe('Search component', () => {
  test('It should change state when price div clicked', (done) => {
    const wrapper = mount(<Search />);
    wrapper.find('.priceP').simulate('click');
    expect(wrapper.state('priceCheck')).toBe(true);
    done();
  });
  test('Price dropdown renders when priceCheck in state is true', (done) => {
    const wrapper = mount(<Search />);
    wrapper.setState({ priceCheck: true }, () => {
      const firstLowPrice = wrapper.find('.firstLowPrice').length;
      const lowPrices = wrapper.find('.lowPrice').length;
      expect(firstLowPrice + lowPrices).toBe(9);
      done();
    });
  })
    test('Price dropdown renders high prices when priceCheck/highPriceCheck in state is true', (done) => {
    const wrapper = mount(<Search />);
    wrapper.setState({ priceCheck: true, highPriceCheck: true }, () => {
      const firstHighPrice = wrapper.find('.firstHighPrice').length;
      const highPrices = wrapper.find('.highPrice').length;
      expect(firstHighPrice + highPrices).toBe(9);
      done();
    });
  });
});