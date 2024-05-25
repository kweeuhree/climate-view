import React from 'react';
import CommentSection from '../components/CommentSection';

const ImpactPage = ({loggedIn, user}) => {
  return (
   <>
    <section className='impact-section'>ImpactPage</section>
    <CommentSection user={user} loggedIn={loggedIn}/>
   </>
  )
}

export default ImpactPage;