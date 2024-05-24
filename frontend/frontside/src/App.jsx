import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { getWeather } from './utils/weather-api';
import './App.css';
//logos
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//components
import NavBar from './components/NavBar&Footer/NavBar';
import Footer from './components/NavBar&Footer/Footer';
import UsefulLink from './components/UsefulLink';
import CommentSection from './components/CommentSection';
//pages
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage';
import ImpactPage from './pages/ImpactPage';



function App() {
  const [weather, setWeather] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // set logged in status to false

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