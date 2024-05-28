import React, { useState, useEffect } from 'react';
import Cities from '../../components/City/Cities';
import { fetchData } from '../../utils/fetchData'; // fetching logic
import CommentSection from '../../components/CommentSection/CommentSection';
import './HistoryPageStyle.css';

const HistoryPage = ({loggedIn, user}) => {

  // city to compare
  const [city, setCity] = useState({
    id: '',
    stateRegion: '',
    country: '',
    name: '',
    date: '',
    temp: ''
  })

  // array of cities to compare
  const [cities, setCities] = useState([]);

  // handle form data dynamically
  const [formData, setFormData] = useState({
    countryFormData: '', // country: country, stateRegion: admin1
    stateRegion: '', 
    cityFormData: '',
    date: ''
  })

  // add a city to cities array each time city state changes
  useEffect(() => {
    if(city.name === '' || city.temp === '') return;

    // check cities length, dont add more than two
    if(cities.length === 2) {
      alert('cant add more than 2 cities');
    } else {
      // add to array
      setCities((prevCities) => [...prevCities, city]);
    }
  }, [city]) // check for city state changes

  // handle form data change dynamically
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('attempting submit with formData: ', formData);
    getCity(formData); // pass form data to getCity()
  }

  // pass form data to fetching function
  const getCity = async (formData) => {
    // make sure that city and date are present 
    if(!formData.cityFormData || !formData.date) return;
    console.log('attempting submit with formData: ', formData);

    //try fetching city with form data
    try {    
      const cityData = await fetchData(formData);
      // set city with cityData
      setCity({
        id: cityData.cityId, 
        stateRegion: cityData.admin1, 
        country: cityData.country, 
        name: cityData.name, 
        date: formData.date, 
        temp: cityData.avgTemp
      });

    } catch (error) { //catch errors
      console.log(error, 'error getting city');
    }
  }

  // remove city from cities
  const removeCity = (city) => {
    console.log('attempting removing city');
    // filter cities array
    const updatedCities = cities.filter(item => {
      // check both dates and id
      const itemDate = new Date(item.date).getTime();
      const cityDate = new Date(city.date).getTime(); 
      return !(item.id === city.id && itemDate === cityDate);
  });
  // set new state
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
          {/* handle change dynamically with handleChange */}
          <input type="text" name="cityFormData" onChange={handleChange} value={formData.cityFormData} placeholder="city" required={true}/>
          {/* stateRegion and country are optional */}
          <input type="text" name="stateRegion" onChange={handleChange} value={formData.stateRegion} placeholder='state or region'/>
          <input type="text" name="countryFormData" onChange={handleChange} value={formData.countryFormData} placeholder='country'/>
          <input type="date" name="date" onChange={handleChange} value={formData.date} required={true}/>
          <button type="submit">Compare</button>
        </form>
      </div>

    {/* comparison container */}
      <div className="comparison-container">

      {/* display cities if exist, pass removeCity function */}
       {cities?.length > 0 ? ( 
          <Cities cities={cities} removeCity={removeCity}/>
          ) : ( 
          <div className='no-access-message font-size-2rem'>
            {/* display initial message */}
            pick two cities and a date as early as 1940
          </div>
       )}

      </div>


    </section>

{/* comment section */}
    <CommentSection user={user} loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;