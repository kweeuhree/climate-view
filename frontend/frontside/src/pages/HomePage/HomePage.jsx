import React from 'react';
import './HomePage.css';
import CommentSection from '../../components/CommentSection/CommentSection';
import Iceberg from '../../components/Iceberg/Iceberg';

const HomePage = ({loggedIn, user}) => {
  return (
    <>
    <section className="section-home">
       <Iceberg />
    </section>

    {/* comment section */}
    <CommentSection loggedIn={loggedIn} user={user}/>
    </>
  )
}

export default HomePage;