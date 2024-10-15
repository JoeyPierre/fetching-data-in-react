import { useState, useEffect } from 'react'
import * as weatherService from './services/weatherService';
import './App.css'
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';



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
  
  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };
    fetchDefaultData();


  }, []); // An empty dependency array means this runs once after the initial render


return (
  <main>
    <h1>Weather API</h1>
    <WeatherSearch fetchData={fetchData} />
    <WeatherDetails weather={weather} />
</main>
);

};

export default App;
