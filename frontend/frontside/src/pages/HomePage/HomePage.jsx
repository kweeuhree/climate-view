import React from 'react';
import './HomePage.css';
import CommentSection from '../../components/CommentSection/CommentSection';
import Iceberg from '../../components/Iceberg/Iceberg';
import Amazon from '../../components/Amazon/Amazon';
import Ocean from '../../components/Ocean/Ocean';
import Atmosphere from '../../components/Atmosphere/Atmosphere';
import Intro from '../../components/Intro/Intro';

const HomePage = ({loggedIn, user}) => {
  return (
    <>
    <section className="section-home">
      <Intro />
    <div className="spacer"></div>      
      < Atmosphere />
    <div className="spacer"></div>
      <Iceberg />
    <div className="spacer"></div>
      <Amazon />
    <div className='spacer'></div>
       <Ocean />
    </section>
    <div className='quarter-spacer'></div>
    {/* comment section */}
    <CommentSection loggedIn={loggedIn} user={user}/>
    </>
  )
}

export default HomePage;