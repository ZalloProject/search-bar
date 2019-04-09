import React, { Component } from 'react';
import Prices from './components/Prices.jsx';

window.addEventListener('price_change', (e) => console.log(e.detail))

class Search extends Component {
  constructor() {
    super();
    this.state = {
      priceLow: '125,000',
      priceHigh: '500,000',
      priceCheck: false,
      highPriceCheck: false,
    }
    this.openPrice = this.openPrice.bind(this);
    this.lowPriceChange = this.lowPriceChange.bind(this);
    this.highPriceChange = this.highPriceChange.bind(this);
  }

  openPrice(e) {
    const { priceCheck } = this.state;
    if(priceCheck) {
      this.setState({
        priceCheck: false,
      })
    } else {
      this.setState({
        priceCheck: true,
      })
    }
  }

  lowPriceChange(e) {
    let priceLow = e.currentTarget.innerHTML;
    priceLow = priceLow.substr(1, priceLow.length - 2);
    this.setState({
      priceLow,
      highPriceCheck: true,
    })
  }

  highPriceChange(e) {
    let high = e.currentTarget.innerHTML;
    high = high.substr(1, high.length - 2);
    this.setState({
      priceHigh: high,
      highPriceCheck: false,
      priceCheck: false,
    }, () => {
      const { priceLow, priceHigh} = this.state;
      const priceEvent = new CustomEvent('price_change', {detail: {
        low: priceLow,
        high: priceHigh,
      }})
      window.dispatchEvent(priceEvent);
    })
  }

  render() {
    const { priceLow, priceHigh, priceCheck, highPriceCheck } = this.state;
    let newLow = priceLow.split(',')[0];
    newLow = newLow + 'k';
    let newHigh = priceHigh.split(',')[0];
    newHigh = newHigh + 'k';
    return (
      <div className="mainStyle">
        <div className="inputContainer">
          <input type="text" className="inputStyle"/>
          <img src="https://image.flaticon.com/icons/svg/61/61088.svg" alt="search glass" className="imageStyle"/>
        </div>
        <div className="priceContainer">
          <p className="priceP" onClick={this.openPrice}>{newLow} - {newHigh}</p>
          <img className="priceImg" onClick={this.openPrice} src="https://image.flaticon.com/icons/svg/60/60995.svg" alt="arrow down" className="arrowStyle"/>
        <Prices check={priceCheck} low={priceLow} high={priceHigh} lowChange={this.lowPriceChange} highCheck={highPriceCheck} highChange={this.highPriceChange}/>
        </div>
      </div>
    )
  }
}

export default Search;