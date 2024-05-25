import React, {useState} from 'react';
import CommentForm from './CommentForm';

const CommentSection = ({loggedIn, user}) => {

  const [comments, setComments] = useState([]);

  const addNewComment = (data) => {
    setComments((prevComments) => [...comments, data]);
  }

  return (
    <section className='comment-section'>
        {
        loggedIn ? (
        <div className='all-comments-container'>
               <CommentForm addNewComment={addNewComment} user={user}/>
               <ul>
                  {comments.map((item) => (
                  <li key={item.comment._id}>
                    <div>{item.comment.body}</div>
                  </li>
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