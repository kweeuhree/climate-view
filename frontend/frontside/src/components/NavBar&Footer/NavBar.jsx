import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoCloseOutline  } from "react-icons/io5";
import './NavBar.css';

const NavBar = ({loggedIn}) => {
  
  const [isVisible, setIsVisible] = useState(false);

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

  const handleClick = () => {
    setIsVisible(prevState => !prevState);
  }
  
  return (
    
    <nav>
      <div className='burger-icon' onClick={handleClick}>
        { isVisible ? (
         <IoCloseOutline />
        ) : (
          <IoMenu />
        )}
      </div>
      {isVisible && <div className='overlay'><ul style={{display: 'flex'}}>{linksJSX}</ul></div>}
      <ul>{linksJSX}</ul>
      <div className='authcheck'>
        {/* if user is logged in show profile else signlog */}
        {loggedIn ? profile() : signlog()}
      </div>
    </nav>
  )
}

export default NavBar;