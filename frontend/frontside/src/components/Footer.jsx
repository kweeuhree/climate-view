import React from 'react';
import NavBar from './NavBar';

const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <footer>
      <NavBar />

      <div className="copyright">© Veronika Kolesnikova, {year}</div>
    </footer>
  )
}

export default Footer;