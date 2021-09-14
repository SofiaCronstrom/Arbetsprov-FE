import Weather from './weather';
import Form from './form';
import Error from './error';
import useWeather from './useWeather';

const Page = () => {

const {isError, submitRequest, weather} = useWeather();

const onSubmit = (value) => {
    submitRequest(value)
}
    return ( 
        <div>
        {!isError && <Form onSubmitSearch={onSubmit}/>}
        {isError && <Error/>}
        {weather && <Weather weather={weather}/>}
        </div>
     );
}
 
export default Page;