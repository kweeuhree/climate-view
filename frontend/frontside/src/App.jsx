import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { getWeather } from './utils/weather-api';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeather();
      setWeather(weatherData);
    };
    fetchWeather();
  }, []);

  return (
    <>
    i rendered
    </>
  )
}

export default App;