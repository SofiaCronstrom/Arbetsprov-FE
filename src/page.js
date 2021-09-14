import Weather from './fetchWeather';
import Form from './form';
import Error from './error';
import useWeather from './useWeather';
const Page = () => {
    
const {isError, weather} = useWeather();

    return ( 
        <div>
        <Form/>
        <Error/>
        <Weather/>
        </div>
     );
}
 
export default Page;