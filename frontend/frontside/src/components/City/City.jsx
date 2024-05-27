import React from 'react';
import './CitiesStyle.css';

const City = ({city, removeCity}) => {
  return (
    <div className='city-container'>
      <div className="top-section">
          <div>{city.name}</div>
          <div>{city.stateRegion}</div>
          <div>{city.country}</div>
      </div>

      <div>date: {city.date}</div>
      <div>{city.temp}</div>
      <div className="big-button" onClick={()=>removeCity(city)}>✖</div>
    </div>
  )
}

export default City;