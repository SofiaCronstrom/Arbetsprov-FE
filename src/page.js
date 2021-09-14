import Weather from './fetchWeather';
import Form from './form';
import Error from './error';
import useWeather from './useWeather';

const Page = () => {

const {isError, weather, submitRequest} = useWeather();

const onSubmit = (value) => {
    submitRequest(value)
}
    return ( 
        <div>
        {!isError && <Form onSubmitSearch={onSubmit}/>}
        {isError && <Error/>}
        {weather && <Weather/>}
        </div>
     );
}
 
export default Page;