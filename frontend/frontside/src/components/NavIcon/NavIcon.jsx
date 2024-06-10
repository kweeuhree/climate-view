import React from 'react';
import { IoMenu, IoCloseOutline, IoTriangleOutline } from "react-icons/io5";
import './NavIconStyle.css';

const NavIcon = ({type, isVisible, handleBurgerIconClick}) => {

    const handleClick = () => {
        handleBurgerIconClick;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const burgerIcon = () => {
        return (
            <div className='burger-icon' onClick={handleBurgerIconClick}>
                { isVisible ? (
                    <IoCloseOutline  className='close-icon'/>
                    ) : (
                    <IoMenu  />
                )}
            </div>
        );
    }
    
    const toTopIcon = () => {
        return (
            <div onClick={handleClick}>
                <IoTriangleOutline />
            </div>
        )
    }

  return  type === 'burger' ? burgerIcon() : toTopIcon();
}

export default NavIcon;