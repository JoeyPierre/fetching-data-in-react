import { useState } from 'react'
import * as weatherService from './services/weatherService';
import './App.css'
import WeatherSearch from './components/WeatherSearch';



const App = () => {

const [weather, setWeather] = useState({});
const fetchData = async () => {
    const data = await weatherService.show('New York');
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

return (
  <main>
    <h1>Weather API</h1>
    <WeatherSearch fetchData={fetchData} />
</main>
);

};

export default App;
