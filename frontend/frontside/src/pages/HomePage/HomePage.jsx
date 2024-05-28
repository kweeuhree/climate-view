import React from 'react';
import './HomePage.css';
import CommentSection from '../../components/CommentSection/CommentSection';
import ImageSliderContainer from '../../components/ImageSliderContainer/ImageSliderContainer';

const HomePage = ({loggedIn, user}) => {
  return (
    <>
    <section className="section-home">

      {/* image slider container */}
      <div className="image-slider-container">
          <ImageSliderContainer />
      </div>
    </section>

    {/* comment section */}
    <CommentSection loggedIn={loggedIn} user={user}/>
    </>
  )
}

export default HomePage;