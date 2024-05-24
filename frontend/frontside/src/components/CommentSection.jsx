import React, {useState} from 'react';
import Comment from './Comment';

const CommentSection = ({loggedIn, userId}) => {

  const [comment, setComment] = useState({
    body: '',
    postedBy: null  
  })



  return (
    <section className='comment-section'>
        {
        loggedIn ? 

        (<Comment comment={comment} setComment={setComment} loggedIn={loggedIn} userId={userId}/> )
          : 
        (<div>log in to leave a comment</div>)
        }
    </section>
  )
}

export default CommentSection;