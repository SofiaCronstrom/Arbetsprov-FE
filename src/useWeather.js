import { useState } from 'react';

const useWeather = () => {
    const [isError, setError] = useState(false);
    const [weather, setWeather] = useState(null);
    
    const submitRequest = (location) =>{
     console.log({location})
    }

    return {
        isError, 
        weather,
        submitRequest 
    };
};
 
export default useWeather;