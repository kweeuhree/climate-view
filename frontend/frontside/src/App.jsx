import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import { getWeather } from './utils/weather-api';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UsefulLink from './components/UsefulLink';
import { Route, Routes } from 'react-router-dom';
import CommentSection from './components/CommentSection';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ImpactPage from './pages/ImpactPage';

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
          <Route path="/" element={<HomePage />}/>
          <Route path='/dashboard' element={<HomePage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/impact' element={<ImpactPage />} />
        </Routes>

      <CommentSection loggedIn={loggedIn}/>

      <Footer loggedIn={loggedIn} />
    </>
  )
}

export default App;