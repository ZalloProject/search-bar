import React from 'react';
import highSpanChange from '../utils/highSpanChange.jsx';

const Prices = ({ check, low, high, lowChange, highCheck, highChange }) => {
  if (check && !highCheck) {
    return (
      <div className="pricesContainer">
        <div className="priceInputTrack">
          <input value={low} type="text" className="priceInput"/>
          <p>-</p>
          <input value={high} type="text" className="priceInput"/>
        </div>
        <span className="firstLowPrice" onClick={lowChange}>$125,000+</span>
        <span className="lowPrice" onClick={lowChange}>$200,000+</span>
        <span className="lowPrice" onClick={lowChange}>$275,000+</span>
        <span className="lowPrice" onClick={lowChange}>$350,000+</span>
        <span className="lowPrice" onClick={lowChange}>$425,000+</span>
        <span className="lowPrice" onClick={lowChange}>$500,000+</span>
        <span className="lowPrice" onClick={lowChange}>$575,000+</span>
        <span className="lowPrice" onClick={lowChange}>$650,000+</span>
        <span className="lowPrice" onClick={lowChange}>$725,000+</span>
      </div>
    )
  } else if(check && highCheck) {
    const highPricesSpanArr = highSpanChange(low, highChange);
    return (
      <div className="pricesContainer">
        <div className="priceInputTrack">
          <input value={low} type="text" className="priceInput"/>
          <p>-</p>
          <input value={high} type="text" className="priceInput"/>
        </div>
        {highPricesSpanArr}
      </div>
    )
  }
  return null;
}

export default Prices;