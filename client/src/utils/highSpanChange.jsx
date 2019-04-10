import React from 'react';

const numberToStr = (num) => {
  num = num + '';
  let dollarSign = '$'
  if(num.length === 5) {
    num = dollarSign.concat(num);
    num = num.split('');
    const saved = num[2];
    num.splice(2,1,`${saved},`);
    num = num.join('');
    return num;
  } else {
    num = dollarSign.concat(num);
    num = num.split('');
    const saved = num[3];
    num.splice(3,1,`${saved},`);
    num = num.join('');
    return num;
  }
}

const highSpanChange = (price, fn) => {
  const spanArr = [];
  price = price.replace(',', '');
  price = Number(price);
  price += 25000
  let firstNum = numberToStr(price)
  spanArr.push(
    (
      <span onClick={fn} key={firstNum} className="firstHighPrice"><p className="pFirstHigh">{firstNum}</p></span>
    )
  )
  price = Number(price)
  for(let i = 0; i < 8; i++) {
    price += 25000;
    const newPrice = numberToStr(price);
    spanArr.push(
      (
        <span onClick={fn} key={newPrice} className="highPrice"><p className="pHigh">{newPrice}</p></span>
      )
    )
  }
  return spanArr;
}

export default highSpanChange;