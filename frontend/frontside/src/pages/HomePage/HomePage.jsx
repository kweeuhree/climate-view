import React from 'react';
import './HomePage.css';
import CommentSection from '../../components/CommentSection';

const HomePage = ({loggedIn, userId}) => {
  return (
    <>
    <section className="section-home">
      HomePage
    </section>
    <CommentSection loggedIn={loggedIn} userId={userId}/>
    </>
  )
}

export default HomePage;