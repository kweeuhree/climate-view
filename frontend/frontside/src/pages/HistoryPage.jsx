import React from 'react'

const HistoryPage = ({loggedIn}) => {
  return (
    <>
    <section className='history-section'>HistoryPage</section>
    <CommentSection loggedIn={loggedIn}/>
    </>
  )
}

export default HistoryPage;