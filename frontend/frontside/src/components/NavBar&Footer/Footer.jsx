import React from 'react';
import NavBar from './NavBar';
import './NavBar.css';

const Footer = ({ loggedIn }) => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <NavBar loggedIn={loggedIn}/>

      <div className="copyright">© Veronika Kolesnikova, {year}</div>
    </footer>
  )
}

export default Footer;