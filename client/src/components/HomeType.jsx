/* eslint-disable react/prop-types */
import React from 'react';
import style from '../../dist/style.css';

const HomeType = ({ view, change }) => {
  if (view === 'homes') {
    return (
      <div className={style.homeOptionContainer}>
        <span className={style.houseSpan}>
          <input onClick={change} className={style.homeInp} id="search_houses" type="checkbox" defaultChecked />
          <p className={style.spanHomeP}>Houses</p>
        </span>
        <span className={style.houseSpan}>
          <input onClick={change} className={style.homeInp} id="search_Apts" type="checkbox" defaultChecked />
          <p className={style.spanHomeP}>Apartments</p>
        </span>
        <span className={style.houseSpan}>
          <input onClick={change} className={style.homeInp} id="search_thomes" type="checkbox" defaultChecked />
          <p className={style.spanHomeP}>TownHomes</p>
        </span>
        <span className={style.houseSpan}>
          <input onClick={change} className={style.homeInp} id="search_condo" type="checkbox" defaultChecked />
          <p className={style.spanHomeP}>Condos</p>
        </span>
      </div>
    );
  }
  return null;
};

export default HomeType;
