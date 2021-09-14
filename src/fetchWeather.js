import CloseUnion from './images/Union-close.png'
import Sunny from './images/sunny.png';
const Weather = () => {

    return ( 
    
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
     );
}
 
export default Weather
;