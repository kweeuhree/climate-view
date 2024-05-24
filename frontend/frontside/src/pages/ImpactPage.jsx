import React from 'react'

const ImpactPage = ({loggedIn}) => {
  return (
   <>
    <section className='impact-section'>ImpactPage</section>
    <CommentSection loggedIn={loggedIn}/>
   </>
  )
}

export default ImpactPage;