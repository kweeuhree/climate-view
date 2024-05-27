import React from 'react';
import City from './City';
import './CitiesStyle.css';

const Cities = ({cities, removeCity}) => {
  return (
    <div className='cities-container'>
      {cities.map((item, index) => (
        <City key={index} city={item} removeCity={removeCity}/>
      ))}
    </div>
  )
}

export default Cities;