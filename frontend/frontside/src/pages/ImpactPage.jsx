import React from 'react';
import CommentSection from '../components/CommentSection';

const ImpactPage = ({loggedIn}) => {
  return (
   <>
    <section className='impact-section'>ImpactPage</section>
    <CommentSection loggedIn={loggedIn}/>
   </>
  )
}

export default ImpactPage;