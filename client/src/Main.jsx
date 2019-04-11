/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import Prices from './components/Prices.jsx';
import Beds from './components/Beds.jsx';
import HomeType from './components/HomeType.jsx';
import style from '../dist/style.css';

window.addEventListener('price_change', e => console.log(e.detail));
window.addEventListener('beds_change', e => console.log(e.detail));
window.addEventListener('options', e => console.log(e.detail));

class Search extends Component {
  constructor() {
    super();
    this.state = {
      priceLow: '125,000',
      priceHigh: '950,000',
      highPriceCheck: false,
      beds: '1',
      view: '',
      houses: 'X',
      condos: 'X',
      townHomes: 'X',
      apts: 'X'
    };
    this.lowPriceChange = this.lowPriceChange.bind(this);
    this.highPriceChange = this.highPriceChange.bind(this);
    this.bedsChange = this.bedsChange.bind(this);
    this.homeChange = this.homeChange.bind(this);
    this.view = this.view.bind(this);
  }

  view(e) {
    const { view } = this.state;
    console.log(e.target.id);
    if (e.target.id === 'priceP' || e.target.id === 'priceIMG') {
      view === 'prices' ? 
      this.setState({
        view: ''
      }) :
      this.setState({
        view: 'prices'
      }); 
    } else if (e.target.id === 'bedsP' || e.target.id === 'priceIMG') {
      view === 'beds' ? 
      this.setState({
        view: ''
      }) :
      this.setState({
        view: 'beds'
      }); 
    } else if (e.target.id === 'homeP' || e.target.id === 'homeIMG') {
      view === 'homes' ? 
      this.setState({
        view: ''
      }) :
      this.setState({
        view: 'homes'
      }); 
    }
  }

  homeChange(e) {
    const { houses, condos, townHomes, apts } = this.state;
    let newHouseCheck = houses;
    let newCondoCheck = condos;
    let newTownCheck = townHomes;
    let newAptCheck = apts;
    if (e.currentTarget.id === 'search_houses') {
      if (houses === 'X') {
        newHouseCheck = '';
      } else {
        newHouseCheck = 'X';
      }
    } else if (e.currentTarget.id === 'search_Apts') {
      if (apts === 'X') {
        newAptCheck = '';
      } else {
        newAptCheck = 'X';
      }
    } else if (e.currentTarget.id === 'search_thomes') {
      if (townHomes === 'X') {
        newTownCheck = '';
      } else {
        newTownCheck = 'X';
      }
    } else if (e.currentTarget.id === 'search_condo') {
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
        // eslint-disable-next-line no-shadow
        const { houses, condos, townHomes, apts } = this.state;
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

  bedsChange(e) {
    const bedSplit = e.currentTarget.id.split('');
    const bedNumber = bedSplit[bedSplit.length - 1];
    this.setState(
      {
        view: '',
        beds: bedNumber
      },
      () => {
        const event = new CustomEvent('beds_change', { detail: { beds: bedNumber } });
        window.dispatchEvent(event);
      }
    );
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
    const { priceLow, priceHigh, highPriceCheck, beds, view } = this.state;
    let newLow = priceLow.split(',')[0];
    newLow += 'k';
    let newHigh = priceHigh.split(',')[0];
    newHigh += 'k';
    return (
      <div className={style.mainStyle}>
        <div className={style.inputContainer}>
          <input type="text" className={style.inputStyle} placeholder="Address, Neighborhood, or ZIP" />
          <img
            src="https://image.flaticon.com/icons/svg/61/61088.svg"
            alt="search glass"
            className={style.imageStyle}
          />
        </div>
        <div className={style.filterContainer}>
          <div className={style.priceContainer} ref={node => (this.node = node)}>
            <div className="pricesPIMG">
              <p id="priceP" className={style.priceP} onClick={this.view} onKeyPress={this.view}>
                {newLow} - {newHigh}
              </p>
              <img
                id="priceIMG"
                onClick={this.view}
                onKeyPress={this.view}
                src="https://image.flaticon.com/icons/svg/60/60995.svg"
                alt="arrow down"
                className={style.arrowStyle}
              />
            </div>
            <Prices
              view={view}
              low={priceLow}
              high={priceHigh}
              lowChange={this.lowPriceChange}
              highCheck={highPriceCheck}
              highChange={this.highPriceChange}
            />
          </div>
          <div className={style.bedsContainer}>
            <div className={style.bedsPIMG}>
              <p id="bedsP" className={style.bedsP} onClick={this.view} onKeyPress={this.view}>
                {beds}+ Beds
              </p>
              <img
                id="bedsIMG"
                onClick={this.view}
                onKeyPress={this.view}
                src="https://image.flaticon.com/icons/svg/60/60995.svg"
                alt="arrow down"
                className={style.bedsArrowStyle}
              />
            </div>
            <Beds view={view} openBeds={this.openBeds} change={this.bedsChange} />
          </div>
          <div className={style.homeTypeContainer}>
            <div className={style.homePIMG}>
              <p id="homeP" className={style.homeP} onClick={this.view} onKeyPress={this.view}>
                Home Type
              </p>
              <img
                id="homeIMG"
                onClick={this.view}
                onKeyPress={this.view}
                src="https://image.flaticon.com/icons/svg/60/60995.svg"
                alt="arrow down"
                className={style.homeArrowStyle}
              />
            </div>
            <HomeType change={this.homeChange} view={view} />
          </div>
        </div>
        <div className={style.endMainContainer}>
          <div className={style.saveSearchContainer}>
            <p className={style.saveSearchP}>Save Search</p>
          </div>
          <div className={style.savedHomesContainer}>
            <p className={style.savedHomesP}>Saved homes (0)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
