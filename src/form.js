import React, {useState} from 'react';
import Union from './images/Union.png';

const Form = () => {
const [location, setLocation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;
  }
  console.log(location);
    return ( 
    <div className="wrapper">
     
              <form onSubmit={onSubmit} className="location-input">
                <label className="label" htmlFor="city">Hur är vädret i...</label>
                <div className="flex-input">
                  <input value={location} onChange={ e => setLocation(e.target.value)} placeholder="Stad" name="city" className="input"/>

                  <button onClick={onSubmit} type="submit" className="submit-btn">
                    <img src={Union} alt="cross to submit the search" className="submit-icon"/>
                  </button>
                </div>
              </form>
         
    </div> 
    );
}
 
export default Form;
