/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import React from 'react';
import style from '../../dist/style.css';

const numberToStr = num => {
  num += '';
  const dollarSign = '$';
  if (num.length === 5) {
    num = dollarSign.concat(num);
    num = num.split('');
    const saved = num[2];
    num.splice(2, 1, `${saved},`);
    num = num.join('');
    return num;
  }
  num = dollarSign.concat(num);
  num = num.split('');
  const saved = num[3];
  num.splice(3, 1, `${saved},`);
  num = num.join('');
  return num;
};

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
