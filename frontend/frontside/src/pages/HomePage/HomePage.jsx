import React from 'react';
import './HomePage.css';
import CommentSection from '../../components/CommentSection';

const HomePage = ({loggedIn, user}) => {
  return (
    <>
    <section className="section-home">
      HomePage
    </section>
    <CommentSection loggedIn={loggedIn} user={user}/>
    </>
  )
}

export default HomePage;