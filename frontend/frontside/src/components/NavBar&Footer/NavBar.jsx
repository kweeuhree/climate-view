import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({loggedIn}) => {
  
  const links = ['dashboard', 'history', 'impact'];

  const linksJSX = links.map((item, index) => (
    <li key={index}>
      <Link to={`/${item}`}>{item}</Link>
    </li>
  ))

  const profile = () => {
    return (
      <Link to="/profile">profile</Link>
    )
  }

  const signlog = () => {
    return (
     <div className="signlog">
      <Link to="/signup">sign up</Link> / <Link to="/login">log in</Link>
     </div>
    )
  }
  
  return (
    
    <nav>
      <ul>{linksJSX}</ul>
      <div className='authcheck'>
        {/* if user is logged in show profile else signlog */}
        {loggedIn ? profile() : signlog()}
      </div>
    </nav>
  )
}

export default NavBar;