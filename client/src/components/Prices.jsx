/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import highSpanChange from '../utils/highSpanChange.jsx';
import style from '../../dist/style.css';

const Prices = ({ view, low, high, lowChange, highCheck, highChange }) => {
  if (view === 'prices' && !highCheck) {
    return (
      <div className={style.pricesContainer}>
        <div className={style.priceInputTrack}>
          <input value={low} type="text" className={style.priceInput} readOnly />
          <input value={high} type="text" className={style.priceInput} readOnly />
        </div>
        <span
          id="search_zeroP"
          className={style.firstLowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className={style.pFirstLow}>$125,000+</p>
        </span>
        <span
          id="search_oneP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$200,000+</p>
        </span>
        <span
          id="search_twoP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$275,000+</p>
        </span>
        <span
          id="search_threeP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$350,000+</p>
        </span>
        <span
          id="search_fourP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$425,000+</p>
        </span>
        <span
          id="search_fiveP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$500,000+</p>
        </span>
        <span
          id="search_sixP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$575,000+</p>
        </span>
        <span
          id="search_sevenP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$650,000+</p>
        </span>
        <span
          id="search_eightP"
          className={style.lowPrice}
          onClick={lowChange}
          onKeyPress={lowChange}
          role="menu"
          tabIndex="0"
        >
          <p className="pLow">$725,000+</p>
        </span>
      </div>
    );
  }
  if (view === 'prices' && highCheck) {
    const highPricesSpanArr = highSpanChange(low, highChange);
    return (
      <div className={style.pricesContainer}>
        <div className={style.priceInputTrack}>
          <input value={low} type="text" className={style.priceInput} readOnly />
          <input value={high} type="text" className={style.priceInput} readOnly />
        </div>
        {highPricesSpanArr}
      </div>
    );
  }
  return null;
};

export default Prices;
