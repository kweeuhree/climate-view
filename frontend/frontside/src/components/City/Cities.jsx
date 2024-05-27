import React from 'react';
import City from './City';
import './CitiesStyle.css';

const Cities = ({cities}) => {
  return (
    <div className='cities-container'>
      {cities.map((item, index) => (
        <City key={index} city={item}/>
      ))}
    </div>
  )
}

export default Cities;