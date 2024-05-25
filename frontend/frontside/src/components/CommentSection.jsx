import React, {useState} from 'react';
import CommentForm from './CommentForm';

const CommentSection = ({loggedIn, userId}) => {

  const [comments, setComments] = useState([]);

  const addNewComment = (data) => {
    setComments((prevComments) => [...comments, data]);
  }

  return (
    <section className='comment-section'>
        {
        loggedIn ? (
        <div className='all-comments-container'>
               <CommentForm comments={comments} addNewComment={addNewComment} loggedIn={loggedIn} userId={userId}/>
               <ul>
                  {comments.length > 0 && 
                  comments.map((item, index) => (
                  <li key={index}>{item.body}</li>
                ))}
               </ul>
        </div>
      ) : (
        <div>log in to leave a comment</div>
      )}
    </section>
  );
};

export default CommentSection;