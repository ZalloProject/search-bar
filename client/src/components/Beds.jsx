import React from 'react';

const Beds = ({ open, bedsCheck, change, homeCheck }) => {
  if (!open && bedsCheck && !homeCheck) {
    return (
      <div className="bedContainer">
        <span id="zero0" onClick={change} className="bedSpan"><p className="pBeds">0+</p></span>
        <span id="one1" onClick={change} className="bedSpan"><p className="pBeds">1+</p></span>
        <span id="two2" onClick={change} className="bedSpan"><p className="pBeds">2+</p></span>
        <span id="three3" onClick={change} className="bedSpan"><p className="pBeds">3+</p></span>
        <span id="four4" onClick={change} className="bedSpan"><p className="pBeds">4+</p></span>
        <span id="five5" onClick={change} className="bedSpan"><p className="pBeds">5+</p></span>
        <span id="six6" onClick={change} className="bedSpan"><p className="pBeds">6+</p></span>
      </div>
    )
  }
  return null;
}

export default Beds;