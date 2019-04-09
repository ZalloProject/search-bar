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
  test('Price component renders correct string when app mounts', (done) => {
    const wrapper = mount(<Search />);
    const text = wrapper.find('.priceP').text();
    expect(text === '125k - 500k').toBe(true);
    done();
  })
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
  test('High price changes in state with the high price is clicked on', (done) => {
    const wrapper = mount(<Search />);
    wrapper.setState({ priceCheck: true, highPriceCheck: true }, () => {
      const before = wrapper.state('priceHigh')
      wrapper.find('#firstHigh').simulate('click');
      setTimeout(() => {
        const after = wrapper.state('priceHigh');
        expect(before !== after).toBe(true);
        done(); 
      }, 0);
    });
  });
  test('Beds dropdown renders when bedsCheck in state is true', (done) => {
    const wrapper = mount(<Search />);
    wrapper.setState({ bedsCheck: true }, () => {
      const bedSpans = wrapper.find('.bedSpan').length;
      expect(bedSpans).toBe(7);
      done();
    });
  });
  test('State for bed count changes when bed span is clicked on', (done) => {
    const wrapper = mount(<Search />);
    wrapper.setState({ bedsCheck: true }, () => {
      const bedsBefore = wrapper.state('beds');
      wrapper.find('#three3').simulate('click');
      setTimeout(() => {
        const bedsAfter = wrapper.state('beds');
        expect(bedsBefore !== bedsAfter).toBe(true);
        done();
      }, 0);
    });
  });
  test('Beds component renders correct string when app mounts', (done) => {
    const wrapper = mount(<Search />);
    const text = wrapper.find('.bedsP').text();
    expect(text === '1+ Beds').toBe(true);
    done();
  })
});