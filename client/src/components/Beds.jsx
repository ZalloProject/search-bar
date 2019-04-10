/* eslint-disable react/prop-types */
import React from 'react';

const Beds = ({ bedsCheck, change }) => {
  if (bedsCheck) {
    return (
      <div className="bedContainer" role="menu">
        <span id="zero0" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className="bedSpan">
          <p className="pBeds">0+</p>
        </span>
        <span id="one1" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className="bedSpan">
          <p className="pBeds">1+</p>
        </span>
        <span id="two2" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className="bedSpan">
          <p className="pBeds">2+</p>
        </span>
        <span id="three3" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className="bedSpan">
          <p className="pBeds">3+</p>
        </span>
        <span id="four4" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className="bedSpan">
          <p className="pBeds">4+</p>
        </span>
        <span id="five5" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className="bedSpan">
          <p className="pBeds">5+</p>
        </span>
        <span id="six6" onClick={change} onKeyPress={change} role="menu" tabIndex="0" className="bedSpan">
          <p className="pBeds">6+</p>
        </span>
      </div>
    );
  }
  return null;
};

export default Beds;
