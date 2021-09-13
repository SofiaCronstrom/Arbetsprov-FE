import React from 'react';

const Weather = () => {


    return ( 
    <div className="wrapper">
     <body>
              <form className="location-input">
                <label className="label" for="city">Hur är vädret i...</label>
                <input type="text" name="city" className="input"/>
              </form>

              <div className="container">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
              </div>
     </body>
    </div> 
    );
}
 
export default Weather;
