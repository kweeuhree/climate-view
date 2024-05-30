import React from 'react';
import NavBar from './NavBar';
import './NavBar.css';

const Footer = ({ loggedIn }) => {

  // get current year
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* display navigation */}
      <NavBar loggedIn={loggedIn}/>
      {/* display author name and current year */}
      <div className="copyright">© Veronika Kolesnikova, {year}</div>
    </footer>
  )
}

export default Footer;