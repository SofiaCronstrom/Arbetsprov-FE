import React from 'react';

const Weather = () => {

  const key = 'a94c8b198195fc9bc750b4799116fa83';

  const getWeather = async => {

    const url = 'http://api.weatherstack.com/current'
  }


    return ( 
    <div className="wrapper">
     <form className="location-input">
            <label for="city">Enter a location for weather information</label>
            <input type="text" name="city" className="form"/>
          </form>
    </div> 
    );
}
 
export default Weather;
