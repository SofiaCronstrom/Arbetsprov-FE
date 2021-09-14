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
                <div className="flex-input">
                  <input /*type="text"*/ name="city" className="input"/>
                  <button type="submit" className="submit-btn">
                    <img src={Union} alt="cross to submit the search" className="submit-icon"/>
                  </button>
                </div>
              </form>

              <div className="container">

                  <div className="box">
                  <button className="delete-btn">
                    <img src={CloseUnion} alt="cross for delete weather box" className="delete-icon"/>
                  </button>
                  <img src={Sunny} className="icon" alt="sun"/>
                  <div className="flex-temp">
                      <span>17&deg;</span>
                      <h4>STOCKHOLM</h4>
                  </div>  
                  </div>
                  <div className="box"></div>
                  <div className="box"></div>
              </div>
     </body>
    </div> 
    );
}
 
export default Weather;
