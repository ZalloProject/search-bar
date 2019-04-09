import React from 'react';

const Beds = ({ open, bedsCheck, change }) => {
  if (!open && bedsCheck) {
    console.log("DID I GET HERE")
    return (
      <div className="bedContainer">
        <span id="0" onClick={change} className="bedSpan"><p className="pBeds">0+</p></span>
        <span id="1" onClick={change} className="bedSpan"><p className="pBeds">1+</p></span>
        <span id="2" onClick={change} className="bedSpan"><p className="pBeds">2+</p></span>
        <span id="3" onClick={change} className="bedSpan"><p className="pBeds">3+</p></span>
        <span id="4" onClick={change} className="bedSpan"><p className="pBeds">4+</p></span>
        <span id="5" onClick={change} className="bedSpan"><p className="pBeds">5+</p></span>
        <span id="6" onClick={change} className="bedSpan"><p className="pBeds">6+</p></span>
      </div>
    )
  }
  // console.log(open, 'THIS IS IS OPEN')
  // console.log(bedsCheck, 'THIS IS TH EBEDS CHECK');
  return null;
}

export default Beds;