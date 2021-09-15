import { useState } from 'react';

const key = '69733d4955544fb54ca4d740f6ea7e48';

const useWeather = () => {
    const [isError, setError] = useState(false);
    const [weather, setWeather] = useState(null);
    
    const getWeather = async (location) => {
        const url = 'http://api.weatherstack.com/current'
        const query = `?access_key=${key}&query=${location}`;
     
        const response = await fetch(url + query);
        const data = await response.json();
        if (!data || data.length === 0){
            setError('cannot find location')
            return;
        }
        console.log(data)
        return data;
        
    }
        
  const today = (data) =>{
      
    const temp = data.current.temperature;
    const city = data.location.name;
   
    setWeather({temp, city})
 
  }
    
    
    const submitRequest = async (location) =>{
        setError(false)
        const data = await getWeather(location);
        
        today(data)
    }
    
   
    

    return {
        isError, 
        weather,
        submitRequest
        
    };
};
 
export default useWeather;