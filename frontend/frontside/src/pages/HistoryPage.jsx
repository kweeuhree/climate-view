import React from 'react';
import CommentSection from '../components/CommentSection/CommentSection';

const HistoryPage = ({loggedIn, user}) => {
  return (
    <>
    <section className='history-section'>HistoryPage</section>
    <CommentSection user={user} loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;