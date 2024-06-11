import React from 'react';
import { IoMenu, IoCloseOutline, IoCaretBackCircle } from "react-icons/io5";
import './NavIconStyle.css';

const NavIcon = ({type, isVisible, handleBurgerIconClick}) => {

    // on click of to top button
    const handleClick = () => {
        //scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // display burger icon
    const burgerIcon = () => {
        return (
            // on click of burger icon change visibility of sidebar
            <div className='burger-icon' onClick={handleBurgerIconClick}>
                {/* if nav ul is visible show close icon */}
                { isVisible ? (
                    <IoCloseOutline className='close-icon'/>
                    ) : (
                    // else show burger icon
                    <IoMenu  />
                )}
            </div>
        );
    }
    
    // display Home button
    const toTopIcon = () => {
        return (
            //on click of Home button scroll to top
            <div className='burger-icon rotate90deg' onClick={handleClick}>
                {/* Home button icon */}
                <IoCaretBackCircle  />
            </div>
        )
    }

  return  type === 'burger' ? burgerIcon() : toTopIcon();
}

export default NavIcon;