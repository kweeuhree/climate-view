import React from 'react';
import './HomePage.css';
import CommentSection from '../../components/CommentSection/CommentSection';
import Iceberg from '../../components/Iceberg/Iceberg';

const HomePage = ({loggedIn, user}) => {
  return (
    <>
    <section className="section-home">
    <div className='spacer'></div>
       <Iceberg />
    </section>
    <div className='spacer'></div>
    {/* comment section */}
    <CommentSection loggedIn={loggedIn} user={user}/>
    </>
  )
}

export default HomePage;