/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import Prices from './components/Prices.jsx';
import Beds from './components/Beds.jsx';
import HomeType from './components/HomeType.jsx';
import style from '../dist/style.css';

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
    this.container = React.createRef();
    this.lowPriceChange = this.lowPriceChange.bind(this);
    this.highPriceChange = this.highPriceChange.bind(this);
    this.bedsChange = this.bedsChange.bind(this);
    this.homeChange = this.homeChange.bind(this);
    this.view = this.view.bind(this);
    this.bodyClick = this.bodyClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.bodyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.bodyClick);
  }

  // handles closing dropdowns on body click
  bodyClick(event) {
    for (let i = 0; i < event.path.length; i++) {
      if (
        (event.path[i].className !== undefined && event.path[i].className === 'style__priceContainer___3pgcy') ||
        event.path[i].className === 'style__bedsContainer___1GDFb'
      ) {
        return;
      }
    }
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        view: ''
      });
    }
  }

  // method to render dropdowns
  view(e) {
    const { view } = this.state;
    if (e.target.id === 'priceP' || e.target.id === 'priceIMG') {
      view === 'prices'
        ? this.setState({
            view: ''
          })
        : this.setState({
            view: 'prices'
          });
    } else if (e.target.id === 'bedsP' || e.target.id === 'bedsIMG') {
      view === 'beds'
        ? this.setState({
            view: ''
          })
        : this.setState({
            view: 'beds'
          });
    } else if (e.target.id === 'homeP' || e.target.id === 'homeIMG') {
      view === 'homes'
        ? this.setState({
            view: ''
          })
        : this.setState({
            view: 'homes'
          });
    }
  }

  // changes search filter for home type
  homeChange(e) {
    const { houses, condos, townHomes, apts } = this.state;
    let newHouseCheck = houses;
    let newCondoCheck = condos;
    let newTownCheck = townHomes;
    let newAptCheck = apts;
    if (e.currentTarget.id === 'search_houses') {
      houses === 'X' ? (newHouseCheck = '') : (newHouseCheck = 'X');
    } else if (e.currentTarget.id === 'search_Apts') {
      apts === 'X' ? (newAptCheck = '') : (newAptCheck = 'X');
    } else if (e.currentTarget.id === 'search_thomes') {
      townHomes === 'X' ? (newTownCheck = '') : (newTownCheck = 'X');
    } else if (e.currentTarget.id === 'search_condo') {
      condos === 'X' ? (newCondoCheck = '') : (newCondoCheck = 'X');
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
          obj[key] === 'X' ? optionsArr.push(key) : null;
        });
        const event = new CustomEvent('options', { detail: { options: optionsArr } });
        window.dispatchEvent(event);
      }
    );
  }

  // method for filtering how many beds
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

  // method for changing the low price filter
  lowPriceChange(e) {
    let priceLow = e.currentTarget.children[0].innerHTML;
    priceLow = priceLow.substr(1, priceLow.length - 2);
    this.setState({
      priceLow,
      highPriceCheck: true
    });
  }

  // method for changing the high price filter
  highPriceChange(e) {
    let high = e.currentTarget.children[0].innerHTML;
    high = high.substr(1, high.length - 2);
    this.setState(
      {
        priceHigh: high,
        highPriceCheck: false,
        view: ''
      },
      () => {
        let { priceLow, priceHigh } = this.state;
        priceLow = Number(priceLow.replace(',', ''));
        priceHigh = Number(priceHigh.replace(',', ''));
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
          <div className={style.priceContainer} ref={this.container}>
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
          <div className={style.bedsContainer} ref={this.container}>
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
            <Beds view={view} change={this.bedsChange} />
          </div>
          <div className={style.homeTypeContainer} ref={this.container}>
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
