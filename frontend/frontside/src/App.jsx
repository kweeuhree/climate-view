import { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//components
import NavBar from './components/NavBar&Footer/NavBar';
import Footer from './components/NavBar&Footer/Footer';
import UsefulLink from './components/UsefulLink/UsefulLink';
//pages
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import ImpactPage from './pages/ImpactPage';
import SignUpPage from './pages/LoginPage/SignUpPage';
import LogInPage from './pages/LoginPage/LogInPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';



function App() {
  // logged status state
  const [loggedIn, setLoggedIn] = useState(false);
  
  //initialize user object state
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: ''
  });


  return (
    <>
      {/* fundraiser link */}
      <div className="head">
        <UsefulLink />

      {/* navigation bar */}
        <NavBar loggedIn={loggedIn}/>
      </div>

        {/* routes */}
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path='/dashboard' element={<HomePage loggedIn={loggedIn} user={user}/>} />
          <Route path='/history' element={<HistoryPage loggedIn={loggedIn} user={user}/>} />
          <Route path='/impact' element={<ImpactPage loggedIn={loggedIn} user={user}/>} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/log-in" element={<LogInPage setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        </Routes>

        {/* footer (navigation bar) */}
      <Footer loggedIn={loggedIn} />
    </>
  )
}

export default App;