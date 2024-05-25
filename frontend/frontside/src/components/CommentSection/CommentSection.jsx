import React, { useState, useEffect } from 'react';
import { getComments } from '../../utils/getComments';
import CommentForm from '../CommentForm/CommentForm';
import './CommentSection.css';

const CommentSection = ({loggedIn, user}) => {

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getComments();
        // console.log('fetched comments inside try block ', fetchedComments);
        setComments(fetchedComments.comments);
        // console.log('fetchedComments.comments on the front after fetching ', fetchedComments.comments);
      } catch (error) {
        console.log('error inside fetchComments ', error);
      }
    }

    fetchComments();
  
  }, []);

  // useEffect(() => {
  //   displayComments();
  //   console.log(comments, 'comments inside display useEffect')
  // }, [comments]);

  const addNewComment = (data) => {
    setComments((prevComments) => [...prevComments, data]);
  }

  // const displayComments = () => {
  //   return  comments.length > 0 ? (
  //       comments.map((item) => (
  //       <li key={item.comment._id}>
  //         <div>{item.comment.body}</div>
  //       </li>
  //     ))) : ( 
  //       <div>no comments yet</div>
  //      );
  // }

  

  return (
    <section className='comment-section'>
             {loggedIn ? (
                <div className='all-comments-container'>
                  <CommentForm addNewComment={addNewComment} user={user} />
                  <ul className='comment-list'>
                  {comments.length > 0 ? (
                    comments.map((comment) => ( 
                      <li key={comment._id}>
                      
                        <p><span><strong>Posted By:</strong></span> <span>{comment.postedBy}</span></p>
                        <p><span><strong>Created At:</strong></span> <span>{new Date(comment.createdAt).toLocaleString()}</span></p>

                        <p><span><strong>Comment:</strong></span> <span>{comment.body}</span></p>
                      </li>
                    ))
                  ) : (
                    <div>No comments yet</div>
                  )}
                  </ul>
                </div>
              ) : (
                <div>log in to leave a comment</div>
              )}
    </section>
  );
};

export default CommentSection;