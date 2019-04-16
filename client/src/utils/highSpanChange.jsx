/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import React from 'react';
import style from '../../dist/style.css';

// formats the number into a string
const numberToStr = num => {
  num = Intl.NumberFormat().format(num);
  const dollarSign = '$';
  num = dollarSign.concat(num);
  return num;
};

// generates the high prices in the price drop down
const highSpanChange = (price, fn) => {
  const spanArr = [];
  price = price.replace(',', '');
  price = Number(price);
  price += 25000;
  const firstNum = numberToStr(price);
  spanArr.push(
    <span
      id="search_firstHigh"
      onClick={fn}
      onKeyPress={fn}
      key={firstNum}
      className={style.firstHighPrice}
      role="menu"
      tabIndex="0"
    >
      <p className="pFirstHigh">{firstNum}</p>
    </span>
  );
  price = Number(price);
  for (let i = 0; i < 8; i++) {
    price += 25000;
    const newPrice = numberToStr(price);
    spanArr.push(
      <span onClick={fn} onKeyPress={fn} key={newPrice} className={style.highPrice} role="menu" tabIndex="0">
        <p className={style.pHigh}>{newPrice}</p>
      </span>
    );
  }
  return spanArr;
};

export default highSpanChange;
