/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import style from '../../dist/style.css';

// home type dropdown
const HomeType = ({ view, change, houseCheck, aptCheck, tHomeCheck, condoCheck }) => {
  if (view === 'homes') {
    houseCheck === 'X' ? (houseCheck = true) : (houseCheck = false);
    aptCheck === 'X' ? (aptCheck = true) : (aptCheck = false);
    tHomeCheck === 'X' ? (tHomeCheck = true) : (tHomeCheck = false);
    condoCheck === 'X' ? (condoCheck = true) : (condoCheck = false);
    return (
      <div className={style.homeOptionContainer}>
        <span className={style.houseSpan}>
          <input
            onClick={change}
            className={style.homeInp}
            id="search_houses"
            type="checkbox"
            checked={houseCheck ? 'checked' : ''}
            readOnly
          />
          <p className={style.spanHomeP}>Houses</p>
        </span>
        <span className={style.houseSpan}>
          <input
            onClick={change}
            className={style.homeInp}
            id="search_Apts"
            type="checkbox"
            checked={aptCheck ? 'checked' : ''}
            readOnly
          />
          <p className={style.spanHomeP}>Apartments</p>
        </span>
        <span className={style.houseSpan}>
          <input
            onClick={change}
            className={style.homeInp}
            id="search_thomes"
            type="checkbox"
            checked={tHomeCheck ? 'checked' : ''}
            readOnly
          />
          <p className={style.spanHomeP}>TownHomes</p>
        </span>
        <span className={style.houseSpan}>
          <input
            onClick={change}
            className={style.homeInp}
            id="search_condo"
            type="checkbox"
            checked={condoCheck ? 'checked' : ''}
            readOnly
          />
          <p className={style.spanHomeP}>Condos</p>
        </span>
      </div>
    );
  }
  return null;
};

export default HomeType;
