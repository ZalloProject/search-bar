import React, { Component } from 'react';
import Prices from './components/Prices.jsx';
import Beds from './components/Beds.jsx';

window.addEventListener('price_change', (e) => console.log(e.detail))
window.addEventListener('beds_change', (e) => console.log(e.detail));

class Search extends Component {
  constructor() {
    super();
    this.state = {
      priceLow: '125,000',
      priceHigh: '500,000',
      priceCheck: false,
      highPriceCheck: false,
      beds: '1',
      bedsCheck: false,
      isOpen: false,
    }
    this.openPrice = this.openPrice.bind(this);
    this.lowPriceChange = this.lowPriceChange.bind(this);
    this.highPriceChange = this.highPriceChange.bind(this);
    this.openBeds = this.openBeds.bind(this);
    this.bedsChange = this.bedsChange.bind(this);
  }

  openPrice(e) {
    const { priceCheck, bedsCheck } = this.state;
    if(bedsCheck) {
      return;
    }
    if(priceCheck) {
      this.setState({
        priceCheck: false,
        isOpen: false,
      })
    } else {
      this.setState({
        priceCheck: true,
        isOpen: true,
      })
    }
  }
  
  bedsChange(e) {
    this.setState({
      isOpen: false,
      bedsCheck: false,
      beds: e.currentTarget.id,
    }, () => {
      const { beds } = this.state;
      const event = new CustomEvent('beds_change', { detail: { beds } })
      window.dispatchEvent(event);
    })
  }

  openBeds(e) {
    const { bedsCheck, priceCheck } = this.state;
    if(priceCheck) {
      return;
    }
    if(bedsCheck) {
      this.setState({
        bedsCheck: false,
        isOpen: false,
      })
    } else {
      this.setState({
        bedsCheck: true,
        isOpen: true,
      })
    }
  }
  lowPriceChange(e) {
    let priceLow = e.currentTarget.children[0].innerHTML;
    priceLow = priceLow.substr(1, priceLow.length - 2);
    this.setState({
      priceLow,
      highPriceCheck: true,
    })
  }

  highPriceChange(e) {
    let high = e.currentTarget.children[0].innerHTML;
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
    const { priceLow, priceHigh, priceCheck, highPriceCheck, isOpen, beds, bedsCheck } = this.state;
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
          <img onClick={this.openPrice} src="https://image.flaticon.com/icons/svg/60/60995.svg" alt="arrow down" className="arrowStyle"/>
        <Prices check={priceCheck} low={priceLow} high={priceHigh} lowChange={this.lowPriceChange} highCheck={highPriceCheck} highChange={this.highPriceChange} open={isOpen}/>
        </div>
        <div className="bedsContainer">
          <p className="bedsP" onClick={this.openBeds}>{beds}+ Beds</p>
          <img onClick={this.openBeds} src="https://image.flaticon.com/icons/svg/60/60995.svg" alt="arrow down" className="bedsArrowStyle"/>
        <Beds open={priceCheck} bedsCheck={bedsCheck} openBeds={this.openBeds} change={this.bedsChange}/>
        </div>
      </div>
    )
  }
}

export default Search;