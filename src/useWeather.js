import { useState } from 'react';

const useWeather = () => {
    const [isError, setError] = useState(false);
    const [weather, setWeather] = useState(null);
    
    return {
        isError, 
        weather 
    };
};
 
export default useWeather;