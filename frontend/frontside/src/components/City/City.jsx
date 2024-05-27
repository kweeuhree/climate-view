import React from 'react';
import './CitiesStyle.css';

const City = ({city}) => {
  return (
    <div>{city.name}</div>
  )
}

export default City;