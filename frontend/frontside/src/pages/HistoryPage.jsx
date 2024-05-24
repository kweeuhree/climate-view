import React from 'react';
import CommentSection from '../components/CommentSection';

const HistoryPage = ({loggedIn, userId}) => {
  return (
    <>
    <section className='history-section'>HistoryPage</section>
    <CommentSection userId={userId} loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;