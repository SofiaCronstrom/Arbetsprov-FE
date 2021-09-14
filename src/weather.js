import CloseUnion from './images/Union-close.png'
import Sunny from './images/sunny.png';


const Weather = (props) => {

    return ( 
    
<div className="container">

        <div className="box">
        <button className="delete-btn">
        <img src={CloseUnion} alt="cross for delete weather box" className="delete-icon"/>
        </button>
        <img src={Sunny} className="icon" alt="sun"/>
        <div className="flex-temp">
            <span>{props.temp}&deg;</span>
            <h4>{props.city}</h4>
        </div>  
        </div>
        
</div>
     );
}
 
export default Weather
;