/* eslint-disable react/prop-types */
import React from 'react';
import style from '../../dist/style.css';

// beds dropdown
const Beds = ({ view, change }) => {
  console.log(view, 'THIS IS THE VIEW FROM BEDS');
  if (view === 'beds') {
    return (
      <div className={style.bedContainer} role="menu">
        <span id="search_zero0" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className={style.bedSpan}>
          <p className={style.pBeds}>0+</p>
        </span>
        <span id="search_one1" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className={style.bedSpan}>
          <p className={style.pBeds}>1+</p>
        </span>
        <span id="search_two2" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className={style.bedSpan}>
          <p className={style.pBeds}>2+</p>
        </span>
        <span
          id="search_three3"
          onClick={change}
          onKeyPress={change}
          role="menu"
          tabIndex="0"
          className={style.bedSpan}
        >
          <p className={style.pBeds}>3+</p>
        </span>
        <span id="search_four4" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className={style.bedSpan}>
          <p className={style.pBeds}>4+</p>
        </span>
        <span id="search_five5" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className={style.bedSpan}>
          <p className={style.pBeds}>5+</p>
        </span>
        <span id="search_six6" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className={style.bedSpan}>
          <p className={style.pBeds}>6+</p>
        </span>
      </div>
    );
  }
  return null;
};

export default Beds;
