import React, { useState, useEffect } from 'react';
import City from '../../components/City/City';
import CommentSection from '../../components/CommentSection/CommentSection';
import './HIstoryPageStyle.css';

const HistoryPage = ({loggedIn, user}) => {

  const [city, setCity] = useState([]);

  return (
    <>
    <section className='history-section'>

        {/* header */}
      <header>Pick & Compare</header>

    {/* form */}
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="date" />
          <button type="submit">Compare</button>
        </form>
      </div>

    {/* comparison container */}
      <div className="comparison-container">

        <City data={data}/>
        <City data={data}/>
      </div>


    </section>
    <CommentSection user={user} loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;