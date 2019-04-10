import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line import/extensions
import Search from '../client/src/Main.jsx';

configure({ adapter: new Adapter() });

describe('Search component', () => {
  test('It should change state when price div clicked', done => {
    const wrapper = mount(<Search />);
    wrapper.find('.priceP').simulate('click');
    expect(wrapper.state('priceCheck')).toBe(true);
    done();
  });
  test('Price component renders correct string when app mounts', done => {
    const wrapper = mount(<Search />);
    const text = wrapper.find('.priceP').text();
    expect(text === '125k - 500k').toBe(true);
    done();
  });
  test('Price dropdown renders when priceCheck in state is true', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ priceCheck: true }, () => {
      const firstLowPrice = wrapper.find('.firstLowPrice').length;
      const lowPrices = wrapper.find('.lowPrice').length;
      expect(firstLowPrice + lowPrices).toBe(9);
      done();
    });
  });
  test('The low price changes on state when clicked', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ priceCheck: true }, () => {
      const before = wrapper.state('priceLow');
      wrapper.find('#search_twoP').simulate('click');
      setTimeout(() => {
        const after = wrapper.state('priceLow');
        expect(before !== after).toBe(true);
        done();
      }, 0);
    });
  });
  test('Price dropdown renders high prices when priceCheck/highPriceCheck in state is true', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ priceCheck: true, highPriceCheck: true }, () => {
      const firstHighPrice = wrapper.find('.firstHighPrice').length;
      const highPrices = wrapper.find('.highPrice').length;
      expect(firstHighPrice + highPrices).toBe(9);
      done();
    });
  });
  test('High price changes in state with the high price is clicked on', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ priceCheck: true, highPriceCheck: true }, () => {
      const before = wrapper.state('priceHigh');
      wrapper.find('#search_firstHigh').simulate('click');
      setTimeout(() => {
        const after = wrapper.state('priceHigh');
        expect(before !== after).toBe(true);
        done();
      }, 0);
    });
  });
  test('Beds dropdown renders when bedsCheck in state is true', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ bedsCheck: true }, () => {
      const bedSpans = wrapper.find('.bedSpan').length;
      expect(bedSpans).toBe(7);
      done();
    });
  });
  test('State for bed count changes when bed span is clicked on', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ bedsCheck: true }, () => {
      const bedsBefore = wrapper.state('beds');
      wrapper.find('#search_three3').simulate('click');
      setTimeout(() => {
        const bedsAfter = wrapper.state('beds');
        expect(bedsBefore !== bedsAfter).toBe(true);
        done();
      }, 0);
    });
  });
  test('Beds component renders correct string when app mounts', done => {
    const wrapper = mount(<Search />);
    const text = wrapper.find('.bedsP').text();
    expect(text === '1+ Beds').toBe(true);
    done();
  });
  test('The home option drop down should render', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ homeCheck: true }, () => {
      expect(wrapper.find('.houseSpan').length).toBe(4);
      done();
    });
  });
  test('Clicking home option houses check box should change state', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ homeCheck: true }, () => {
      const before = wrapper.state('houses');
      wrapper.find('#search_houses').simulate('click');
      setTimeout(() => {
        const after = wrapper.state('houses');
        expect(before === after).toBe(false);
        done();
      }, 0);
    });
  });
  test('Clicking home option apartment check box should change state', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ homeCheck: true }, () => {
      const before = wrapper.state('apts');
      wrapper.find('#search_Apts').simulate('click');
      setTimeout(() => {
        const after = wrapper.state('apts');
        expect(before === after).toBe(false);
        done();
      }, 0);
    });
  });
  test('Clicking home option condo check box should change state', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ homeCheck: true }, () => {
      const before = wrapper.state('condos');
      wrapper.find('#search_condo').simulate('click');
      setTimeout(() => {
        const after = wrapper.state('condos');
        expect(before === after).toBe(false);
        done();
      }, 0);
    });
  });
  test('Clicking home option townhome check box should change state', done => {
    const wrapper = mount(<Search />);
    wrapper.setState({ homeCheck: true }, () => {
      const before = wrapper.state('townHomes');
      wrapper.find('#search_thomes').simulate('click');
      setTimeout(() => {
        const after = wrapper.state('townHomes');
        expect(before === after).toBe(false);
        done();
      }, 0);
    });
  });
});
