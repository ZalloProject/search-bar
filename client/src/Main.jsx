import React, { Component } from 'react';

class Search extends Component {

  render() {
    const mainStyle = {
      border: 'solid',
      height: '50px',
      width: '100%',
    }
    const inputSyle = {
      height: '25px',
      display: 'flex',
      marginTop: '10px',
      width: '170px',
    }
    const imageStyle = {
      height: '20px',
      marginTop: '15px',
      position: 'absolute',
      marginLeft: '146px',
    }
    const inputContainer = {
      display: 'flex',
      width: '170px',
      position: 'relative',
    }
    return (
      <div className="main" style={mainStyle}>
        <div className="inputContainer" style={inputContainer}>
          <input type="text" style={inputSyle}/>
          <img src="https://image.flaticon.com/icons/svg/61/61088.svg" alt="search glass" style={imageStyle}/>
        </div>
      </div>
    )
  }
}

export default Search;