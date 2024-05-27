import React from 'react';
import './CitiesStyle.css';

const City = ({city, removeCity}) => {
  return (
    <div>
      <div>{city.name}</div>
      <div>date: {city.date}</div>
      <div>{city.temp}</div>
      <div onClick={()=>removeCity(city)}>✖</div>
    </div>
  )
}

export default City;