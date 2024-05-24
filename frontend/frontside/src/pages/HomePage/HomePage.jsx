import React from 'react';
import './HomePage.css';
import CommentSection from '../../components/CommentSection';

const HomePage = ({loggedIn}) => {
  return (
    <>
    <section className="section-home">
      HomePage
    </section>
    <CommentSection loggedIn={loggedIn}/>
    </>
  )
}

export default HomePage;