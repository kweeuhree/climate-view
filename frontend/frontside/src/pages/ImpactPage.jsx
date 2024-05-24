import React from 'react';
import CommentSection from '../components/CommentSection';

const ImpactPage = ({loggedIn, userId}) => {
  return (
   <>
    <section className='impact-section'>ImpactPage</section>
    <CommentSection userId={userId} loggedIn={loggedIn}/>
   </>
  )
}

export default ImpactPage;