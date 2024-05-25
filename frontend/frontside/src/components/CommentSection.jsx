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
               <CommentForm addNewComment={addNewComment} userId={userId}/>
               <ul>
                  {comments.map((item) => (
                  <li key={item.comment._id}>{item.comment.body}</li>
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