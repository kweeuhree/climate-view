import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavIcon from '../NavIcon/NavIcon';

const NavBar = ({loggedIn, type}) => {
  //checks whether mobile sidebar is visible
  const [isVisible, setIsVisible] = useState(false);
  //nav items names
  const links = ['dashboard', 'history', 'impact'];

  // on click check if sidebar is visible, if it is - close it
  const handleLinkClick = () => {
    isVisible ? setIsVisible(prevState => !prevState) : null;
  }

  // on click of burger icon change visibility of side bar
  const handleBurgerIconClick = () => {
    setIsVisible(prevState => !prevState);
  }

  //generate list items for NavBar's unordered list
  const linksJSX = links.map((item, index) => (
    <li key={index}>
      {/* navigate to relevant path and change visibility of sidebar */}
      <Link to={`/${item}`} onClick={handleLinkClick}>{item}</Link>
    </li>
  ))

  // display profile path
  const profile = () => {
    return (
      <Link to="/profile">profile</Link>
    )
  }

  // display sign up / log in paths
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
  
  //main function---------------------------------
  return (
    
    <nav>

      {/* NavIcon, display burger or home icons */}
     <NavIcon
      // pass icon type 
      type={type} 
      isVisible={isVisible} 
      handleBurgerIconClick={handleBurgerIconClick}
      />

    {/* in mobile view, if mobile sidebar is visible display navigation list */}
      {isVisible && 
        <div className='overlay'>
          <ul style={{display: 'flex'}}>
            {/* navigation list items */}
            {linksJSX}
          </ul>
        </div>
      }

      {/* display navigation bar in non-mobile view */}
      <ul>{linksJSX}</ul>

      <div className='authcheck'>
        {/* if user is logged in show profile else signlog */}
        {loggedIn ? profile() : signlog()}
      </div>

    </nav>
  )
}

export default NavBar;