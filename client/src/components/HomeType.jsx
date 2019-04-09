import React from 'react';

const HomeType = ({ homeCheck, change }) => {
  if(homeCheck) {
    return (
      <div className="homeOptionContainer">
        <span className="houseSpan"><input onClick={change} className="homeInp" id="houses" type="checkbox" defaultChecked/><p className="homeP">Houses</p></span>
        <span className="houseSpan"><input onClick={change} className="homeInp" id="Apts" type="checkbox" defaultChecked/><p className="homeP">Apartments</p></span>
        <span className="houseSpan"><input onClick={change} className="homeInp" id="thomes" type="checkbox" defaultChecked/><p className="homeP">TownHomes</p></span>
        <span className="houseSpan"><input onClick={change} className="homeInp" id="condo" type="checkbox" defaultChecked/><p className="homeP">Condos</p></span>
      </div>
    )
  }
  return null;
}

export default HomeType;