import React from 'react';
import highSpanChange from '../utils/highSpanChange.jsx';

const Prices = ({ check, low, high, lowChange, highCheck, highChange, homeCheck }) => {
  if (check && !highCheck) {
    return (
      <div className="pricesContainer">
        <div className="priceInputTrack">
          <input defaultValue={low} type="text" className="priceInput"/>
          <p>-</p>
          <input defaultValue={high} type="text" className="priceInput"/>
        </div>
        <span id="zeroP" className="firstLowPrice" onClick={lowChange}><p className="pFirstLow">$125,000+</p></span>
        <span id="oneP" className="lowPrice" onClick={lowChange}><p className="pLow">$200,000+</p></span>
        <span id="twoP" className="lowPrice" onClick={lowChange}><p className="pLow">$275,000+</p></span>
        <span id="threeP" className="lowPrice" onClick={lowChange}><p className="pLow">$350,000+</p></span>
        <span id="fourP" className="lowPrice" onClick={lowChange}><p className="pLow">$425,000+</p></span>
        <span id="fiveP" className="lowPrice" onClick={lowChange}><p className="pLow">$500,000+</p></span>
        <span id="sixP" className="lowPrice" onClick={lowChange}><p className="pLow">$575,000+</p></span>
        <span id="sevenP" className="lowPrice" onClick={lowChange}><p className="pLow">$650,000+</p></span>
        <span id="eightP" className="lowPrice" onClick={lowChange}><p className="pLow">$725,000+</p></span>
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