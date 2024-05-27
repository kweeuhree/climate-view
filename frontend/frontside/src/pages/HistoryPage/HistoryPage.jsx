import React, { useState, useEffect } from 'react';
import Cities from '../../components/City/Cities';
import { fetchData } from '../../utils/fetchData';
import CommentSection from '../../components/CommentSection/CommentSection';
import './HistoryPageStyle.css';

const HistoryPage = ({loggedIn, user}) => {

  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    city: '',
    date: ''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    const getCity = async () => {
      const cityData = await fetchData();
      setCities(cityData);
    }

    getCity();
  }, [cities])

  const handleSubmit = () => {
    console.log('attempting submit');
  }



  return (
    <>
    <section className='history-section'>

        {/* header */}
      <header>Pick & Compare</header>

    {/* form */}
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={formData.city} />
          <input type="date" onChange={handleChange} value={formData.date} />
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