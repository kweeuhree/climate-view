import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import { getWeather } from './utils/weather-api';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UsefulLink from './components/UsefulLink';
import { Router, Routes } from 'react-router-dom';

function App() {
  const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     const weatherData = await getWeather();
  //     setWeather(weatherData);
  //   };
  //   fetchWeather();
  // }, []);

  return (
    <>

    <UsefulLink />

      <NavBar />

        <Routes>

        </Routes>

      <Footer />
    </>
  )
}

export default App;