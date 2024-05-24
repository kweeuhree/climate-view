import React, {useState} from 'react';
import Comment from './Comment';

const CommentSection = ({loggedIn}) => {

  const [comment, setComment] = useState({
    body: '',
    postedBy: null  
  })



  return (
    <section className='comment-section'>
        {
        loggedIn === true ? 
          <Comment comment={comment} setComment={setComment}/> 
          : 
          'log in to leave a comment'
        }
    </section>
  )
}

export default CommentSection;