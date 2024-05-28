import React from 'react';
import './CitiesStyle.css';

const City = ({city, removeCity}) => {
  return (
    <div className='display-flex flex-center city-container'>
      {/* display city */}
      <div className="top-section">
          <div>{city.name}</div>
          <div>
            <div>{city.stateRegion}</div>
            <div>{city.country}</div>
          </div>
      </div>

      <div className='display-flex flex-center date-temp'>
        <div>date: {city.date}</div>
        <div className='font-size-2rem'>{city.temp}</div>
      </div>

    {/* onclick pass information to a parent component */}
      <div className="big-button" onClick={()=>removeCity(city)}>✖</div>
    </div>
  )
}

export default City;