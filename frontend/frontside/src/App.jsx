import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import { getWeather } from './utils/weather-api';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UsefulLink from './components/UsefulLink';
import { Router, Routes } from 'react-router-dom';
import CommentSection from './components/CommentSection';

function App() {
  const [weather, setWeather] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

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

      <NavBar loggedIn={loggedIn}/>

        <Routes>

        </Routes>

      <CommentSection loggedIn={loggedIn}/>

      <Footer loggedIn={loggedIn} />
    </>
  )
}

export default App;