import React from 'react';
import Sunny from './images/sunny.png';
import Union from './images/Union.png';
import CloseUnion from './images/Union-close.png'
const Weather = () => {


    return ( 
    <div className="wrapper">
     <body>
              <form className="location-input">
                <label className="label" for="city">Hur är vädret i...</label>
                <input value="Stad:"type="text" name="city" className="input"/>
                <button type="submit" className="submit-button">
                  <img src={Union} alt="cross to submit the search" className="submit-icon"/>
                </button>
              </form>

              <div className="container">

                  <div className="box">
                  <button className="delete-btn">
                    <img src={CloseUnion} alt="cross for delete weather box" className="delete-icon"/>
                  </button>
                  <img src={Sunny} className="icon" alt="sun"/>
                  <span>&deg;C</span>
                  <h4>CITY</h4>
                    
                  </div>
                  <div className="box"></div>
                  <div className="box"></div>
              </div>
     </body>
    </div> 
    );
}
 
export default Weather;
