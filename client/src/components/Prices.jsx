import React from 'react';
import highSpanChange from '../utils/highSpanChange.jsx';

const Prices = ({ check, low, high, lowChange, highCheck, highChange }) => {
  if (check && !highCheck) {
    return (
      <div className="pricesContainer">
        <div className="priceInputTrack">
          <input defaultValue={low} type="text" className="priceInput"/>
          <p>-</p>
          <input defaultValue={high} type="text" className="priceInput"/>
        </div>
        <span id="0" className="firstLowPrice" onClick={lowChange}>$125,000+</span>
        <span id="1" className="lowPrice" onClick={lowChange}>$200,000+</span>
        <span id="2" className="lowPrice" onClick={lowChange}>$275,000+</span>
        <span id="3" className="lowPrice" onClick={lowChange}>$350,000+</span>
        <span id="4" className="lowPrice" onClick={lowChange}>$425,000+</span>
        <span id="5" className="lowPrice" onClick={lowChange}>$500,000+</span>
        <span id="6" className="lowPrice" onClick={lowChange}>$575,000+</span>
        <span id="7" className="lowPrice" onClick={lowChange}>$650,000+</span>
        <span id="8" className="lowPrice" onClick={lowChange}>$725,000+</span>
      </div>
    )
  } else if(check && highCheck) {
    const highPricesSpanArr = highSpanChange(low, highChange);
    return (
      <div className="pricesContainer">
        <div className="priceInputTrack">
          <input defaultValue={low} type="text" className="priceInput"/>
          <p>-</p>
          <input defaultValue={high} type="text" className="priceInput"/>
        </div>
        {highPricesSpanArr}
      </div>
    )
  }
  return null;
}

export default Prices;