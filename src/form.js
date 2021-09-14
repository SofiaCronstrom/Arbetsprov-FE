import React from 'react';
import Union from './images/Union.png';

const Form = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  }
    return ( 
    <div className="wrapper">
     <body>
              <form onSubmit={onSubmit} className="location-input">
                <label className="label" for="city">Hur är vädret i...</label>
                <div className="flex-input">
                  <input placeholder="Stad" name="city" className="input"/>

                  <button onClick={onSubmit} type="submit" className="submit-btn">
                    <img src={Union} alt="cross to submit the search" className="submit-icon"/>
                  </button>
                </div>
              </form>
         </body>
    </div> 
    );
}
 
export default Form;
