import CloseUnion from './images/Union-close.png'
import Sunny from './images/sunny.png';
import Cloudy from './images/mostly-cloudy.png'
import Snow from './images/snow.png'
const Weather = ({weather}) => {
     
    

    return ( 
    
                <div className="container">

                        <div className="box" style={{backgroundColor: weather.temp >= 20 ? '#F24726' 
                        : weather.temp < 20 && weather.temp > 0 ? '#FAC710' 
                        : '#2D9BF0'  }}>
                        <button className="delete-btn">
                        <img src={CloseUnion} alt="cross for delete weather box" className="delete-icon"/>
                        </button>
                        <img src={weather.temp >= 20 ? Sunny 
                        : weather.temp < 20 && weather.temp > 0 ? Cloudy 
                        : Snow  } className="icon" alt="sun"/>
                        <div className="flex-temp">
                            <span>{weather.temp}&deg;</span>
                            <h4>{weather.city}</h4>
                        </div>  
                        </div>
                        
                </div>
     );
}
 
export default Weather
;