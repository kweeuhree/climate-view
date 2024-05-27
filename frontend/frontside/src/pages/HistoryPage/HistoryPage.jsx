import React, { useState, useEffect } from 'react';
import Cities from '../../components/City/Cities';
import { fetchData } from '../../utils/fetchData';
import CommentSection from '../../components/CommentSection/CommentSection';
import './HistoryPageStyle.css';

const HistoryPage = ({loggedIn, user}) => {

  const [city, setCity] = useState({
    name: '',
    temp: ''
  })
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    city: '',
    date: ''
  })

  useEffect(() => {
    if(city.name === '' || city.temp === '') return;

    if(cities.length === 2) {
      alert('cant add more than 2 cities');
    } else {
      setCities((prevCities) => [...prevCities, city]);
    }
  }, [city])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('attempting submit');
    const city = formData.city;
    const date = formData.date;
    getCity(city, date);
  }

  const getCity = async (city, date) => {
    if(!city || !date) return;

    const cityData = await fetchData(city, date);
    setCity({name: city, temp: cityData});
  }



  return (
    <>
    <section className='history-section'>

        {/* header */}
      <header>Pick & Compare</header>

    {/* form */}
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" name="city" onChange={handleChange} value={formData.city} placeholder="enter city"/>
          <input type="date" name="date" onChange={handleChange} value={formData.date} />
          <button type="submit">Compare</button>
        </form>
      </div>

    {/* comparison container */}
      <div className="comparison-container">

       {cities?.length > 0 &&  <Cities cities={cities}/>}
      </div>


    </section>
    <CommentSection user={user} loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;