/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import Prices from './components/Prices.jsx';
import Beds from './components/Beds.jsx';
import HomeType from './components/HomeType.jsx';

// window.addEventListener('price_change', (e) => console.log(e.detail))
// window.addEventListener('beds_change', (e) => console.log(e.detail));
// window.addEventListener('options', (e) => console.log(e.detail));

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
      homeCheck: false,
      houses: 'X',
      condos: 'X',
      townHomes: 'X',
      apts: 'X'
    };
    this.openPrice = this.openPrice.bind(this);
    this.lowPriceChange = this.lowPriceChange.bind(this);
    this.highPriceChange = this.highPriceChange.bind(this);
    this.openBeds = this.openBeds.bind(this);
    this.bedsChange = this.bedsChange.bind(this);
    this.openHomes = this.openHomes.bind(this);
    this.homeChange = this.homeChange.bind(this);
  }

  homeChange(e) {
    const { houses, condos, townHomes, apts } = this.state;
    let newHouseCheck = houses;
    let newCondoCheck = condos;
    let newTownCheck = townHomes;
    let newAptCheck = apts;
    if (e.currentTarget.id === 'houses') {
      if (houses === 'X') {
        newHouseCheck = '';
      } else {
        newHouseCheck = 'X';
      }
    } else if (e.currentTarget.id === 'Apts') {
      if (apts === 'X') {
        newAptCheck = '';
      } else {
        newAptCheck = 'X';
      }
    } else if (e.currentTarget.id === 'thomes') {
      if (townHomes === 'X') {
        newTownCheck = '';
      } else {
        newTownCheck = 'X';
      }
    } else if (e.currentTarget.id === 'condo') {
      if (condos === 'X') {
        newCondoCheck = '';
      } else {
        newCondoCheck = 'X';
      }
    }
    this.setState(
      {
        houses: newHouseCheck,
        condos: newCondoCheck,
        townHomes: newTownCheck,
        apts: newAptCheck
      },
      () => {
        // const { houses, condos, townHomes, apts } = this.state;
        const optionsArr = [];
        const obj = {
          houses,
          condos,
          townHomes,
          apts
        };
        const keys = Object.keys(obj);
        keys.forEach(key => {
          if (obj[key] === 'X') {
            optionsArr.push(key);
          }
        });
        const event = new CustomEvent('options', { detail: { options: optionsArr } });
        window.dispatchEvent(event);
      }
    );
  }

  openHomes() {
    const { homeCheck } = this.state;
    if (homeCheck) {
      this.setState({
        homeCheck: false
      });
    } else {
      this.setState({
        homeCheck: true,
        bedsCheck: false,
        priceCheck: false
      });
    }
  }

  openPrice() {
    const { priceCheck } = this.state;
    if (priceCheck) {
      this.setState({
        priceCheck: false
      });
    } else {
      this.setState({
        homeCheck: false,
        bedsCheck: false,
        priceCheck: true
      });
    }
  }

  bedsChange(e) {
    const bedSplit = e.currentTarget.id.split('');
    const bedNumber = bedSplit[bedSplit.length - 1];
    this.setState(
      {
        bedsCheck: false,
        beds: bedNumber
      },
      () => {
        const event = new CustomEvent('beds_change', { detail: { beds: bedNumber } });
        window.dispatchEvent(event);
      }
    );
  }

  openBeds() {
    const { bedsCheck } = this.state;
    if (bedsCheck) {
      this.setState({
        bedsCheck: false
      });
    } else {
      this.setState({
        homeCheck: false,
        bedsCheck: true,
        priceCheck: false
      });
    }
  }

  lowPriceChange(e) {
    let priceLow = e.currentTarget.children[0].innerHTML;
    priceLow = priceLow.substr(1, priceLow.length - 2);
    this.setState({
      priceLow,
      priceCheck: true,
      highPriceCheck: true
    });
  }

  highPriceChange(e) {
    let high = e.currentTarget.children[0].innerHTML;
    high = high.substr(1, high.length - 2);
    this.setState(
      {
        priceHigh: high,
        highPriceCheck: false,
        priceCheck: false
      },
      () => {
        const { priceLow, priceHigh } = this.state;
        const priceEvent = new CustomEvent('price_change', {
          detail: {
            low: priceLow,
            high: priceHigh
          }
        });
        window.dispatchEvent(priceEvent);
      }
    );
  }

  render() {
    const { priceLow, priceHigh, priceCheck, highPriceCheck, beds, bedsCheck, homeCheck } = this.state;
    let newLow = priceLow.split(',')[0];
    newLow += 'k';
    let newHigh = priceHigh.split(',')[0];
    newHigh += 'k';
    return (
      <div className="mainStyle">
        <div className="inputContainer">
          <input type="text" className="inputStyle" placeholder="Address, Neighborhood, or ZIP" />
          <img src="https://image.flaticon.com/icons/svg/61/61088.svg" alt="search glass" className="imageStyle" />
        </div>
        <div className="priceContainer">
          <p className="priceP" onClick={this.openPrice} onKeyPress={this.openPrice}>
            {newLow} - {newHigh}
          </p>
          <img
            onClick={this.openPrice}
            onKeyPress={this.openPrice}
            src="https://image.flaticon.com/icons/svg/60/60995.svg"
            alt="arrow down"
            className="arrowStyle"
          />
          <Prices
            check={priceCheck}
            low={priceLow}
            high={priceHigh}
            lowChange={this.lowPriceChange}
            highCheck={highPriceCheck}
            highChange={this.highPriceChange}
          />
        </div>
        <div className="bedsContainer">
          <p onClick={this.openBeds} onKeyPress={this.openBeds} className="bedsP">
            {beds}+ Beds
          </p>
          <img
            onClick={this.openBeds}
            onKeyPress={this.openBeds}
            src="https://image.flaticon.com/icons/svg/60/60995.svg"
            alt="arrow down"
            className="bedsArrowStyle"
          />
          <Beds open={priceCheck} bedsCheck={bedsCheck} openBeds={this.openBeds} change={this.bedsChange} />
        </div>
        <div className="homeTypeContainer">
          <p className="homeP" onClick={this.openHomes} onKeyPress={this.openHomes}>
            Home Type
          </p>
          <img
            onClick={this.openHomes}
            onKeyPress={this.openHomes}
            src="https://image.flaticon.com/icons/svg/60/60995.svg"
            alt="arrow down"
            className="homeArrowStyle"
          />
          <HomeType change={this.homeChange} homeCheck={homeCheck} />
        </div>
        <div className="endMainContainer">
          <div className="saveSearchContainer">
            <p className="saveSearchP">Save Search</p>
          </div>
          <div className="savedHomesContainer">
            <p className="savedHomesP">Saved homes (0)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
