import React from 'react';
import highSpanChange from '../utils/highSpanChange.jsx';

const Prices = ({ check, low, high, lowChange, highCheck, highChange, open }) => {
  if (check && !highCheck && open) {
    return (
      <div className="pricesContainer">
        <div className="priceInputTrack">
          <input defaultValue={low} type="text" className="priceInput"/>
          <p>-</p>
          <input defaultValue={high} type="text" className="priceInput"/>
        </div>
        <span id="0" className="firstLowPrice" onClick={lowChange}><p className="pFirstLow">$125,000+</p></span>
        <span id="1" className="lowPrice" onClick={lowChange}><p className="pLow">$200,000+</p></span>
        <span id="2" className="lowPrice" onClick={lowChange}><p className="pLow">$275,000+</p></span>
        <span id="3" className="lowPrice" onClick={lowChange}><p className="pLow">$350,000+</p></span>
        <span id="4" className="lowPrice" onClick={lowChange}><p className="pLow">$425,000+</p></span>
        <span id="5" className="lowPrice" onClick={lowChange}><p className="pLow">$500,000+</p></span>
        <span id="6" className="lowPrice" onClick={lowChange}><p className="pLow">$575,000+</p></span>
        <span id="7" className="lowPrice" onClick={lowChange}><p className="pLow">$650,000+</p></span>
        <span id="8" className="lowPrice" onClick={lowChange}><p className="pLow">$725,000+</p></span>
      </div>
    )
  } else if(check && highCheck && open) {
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