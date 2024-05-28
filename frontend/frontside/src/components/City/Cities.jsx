import React from 'react';
import City from './City';
import './CitiesStyle.css';

const Cities = ({cities, removeCity}) => {
  return (
    <div className='cities-container'>
      {/* map through cities array and pass each element into City component, pass removeCity as well */}
      {cities.map((item, index) => (
        <City key={index} city={item} removeCity={removeCity}/>
      ))}
    </div>
  )
}

export default Cities;