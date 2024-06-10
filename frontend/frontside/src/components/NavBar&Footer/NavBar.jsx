import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavIcon from '../NavIcon/NavIcon';

const NavBar = ({loggedIn, type}) => {
  
  const [isVisible, setIsVisible] = useState(false);

  const links = ['dashboard', 'history', 'impact'];

  const handleLinkClick = () => {
    isVisible ? setIsVisible(prevState => !prevState) : null;
  }

  const handleBurgerIconClick = () => {
    setIsVisible(prevState => !prevState);
  }

  const linksJSX = links.map((item, index) => (
    <li key={index}>
      <Link to={`/${item}`} onClick={handleLinkClick}>{item}</Link>
    </li>
  ))

  const profile = () => {
    return (
      <Link to="/profile">profile</Link>
    )
  }
//if nav ul isnt visible show burger icon

  const signlog = () => {
    return (
     <div className="signlog">
      <Link to={'/sign-up'}>
        sign up
      </Link> / <Link
        to={'/log-in'}>
          log in
        </Link>
     </div>
    )
  }
  
  return (
    
    <nav>

     <NavIcon 
      type={type} 
      isVisible={isVisible} 
      handleBurgerIconClick={handleBurgerIconClick}
      />

      {isVisible && 
        <div className='overlay'>
          <ul style={{display: 'flex'}}>
            {linksJSX}
          </ul>
        </div>
      }

      <ul>{linksJSX}</ul>

      <div className='authcheck'>
        {/* if user is logged in show profile else signlog */}
        {loggedIn ? profile() : signlog()}
      </div>

    </nav>
  )
}

export default NavBar;