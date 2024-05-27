import React, { useState, useEffect } from 'react';
import Cities from '../../components/City/Cities';
import { fetchData } from '../../utils/fetchData';
import CommentSection from '../../components/CommentSection/CommentSection';
import './HistoryPageStyle.css';

const HistoryPage = ({loggedIn, user}) => {

  const [city, setCity] = useState({
    id: '',
    stateRegion: '',
    country: '',
    name: '',
    date: '',
    temp: ''
  })
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    countryFormData: '', // country: country, stateRegion: admin1
    stateRegion: '', 
    cityFormData: '',
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
    // country: country, stateRegion: admin1
    // console.log('attempting submit with formData: ', formData);
    getCity(formData);
  }

  const getCity = async (formData) => {
    if(!formData.cityFormData || !formData.date) return;
    console.log('attempting submit with formData: ', formData);
    const cityData = await fetchData(formData);
    setCity({id: cityData.cityId, stateRegion: cityData.admin1, country: cityData.country, name: cityData.name, date: formData.date, temp: cityData.avgTemp});
  }

  const removeCity = (city) => {
    console.log('attempting removing city');
    const updatedCities = cities.filter(item => {
      const itemDate = new Date(item.date).getTime();
      const cityDate = new Date(city.date).getTime();
      return !(item.id === city.id && itemDate === cityDate);
  });
    setCities(updatedCities);
  }  


  return (
    <>
    <section className='history-section'>

        {/* header */}
      <header><h1>Pick & Compare</h1></header>

      {/* form */}
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" name="cityFormData" onChange={handleChange} value={formData.cityFormData} placeholder="city" required={true}/>
          <input type="text" name="stateRegion" onChange={handleChange} value={formData.stateRegion} placeholder='state or region'/>
          <input type="text" name="countryFormData" onChange={handleChange} value={formData.countryFormData} placeholder='country'/>
          <input type="date" name="date" onChange={handleChange} value={formData.date} required={true}/>
          <button type="submit">Compare</button>
        </form>
      </div>

    {/* comparison container */}
      <div className="comparison-container">

       {cities?.length > 0 ? ( 
          <Cities cities={cities} removeCity={removeCity}/>
          ) : ( 
          <div className='no-access-message font-size-2rem'>
            pick two cities and a date as early as 1940
          </div>
       )}

      </div>


    </section>

    <CommentSection user={user} loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;