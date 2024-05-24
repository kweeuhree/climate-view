import React from 'react';
import CommentSection from '../components/CommentSection';

const HistoryPage = ({loggedIn}) => {
  return (
    <>
    <section className='history-section'>HistoryPage</section>
    <CommentSection loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;