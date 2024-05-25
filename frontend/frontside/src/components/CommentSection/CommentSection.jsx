import React, { useState, useEffect } from 'react';
import { getComments } from '../../utils/getComments';
import Comment from './Comment';
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

  const addNewComment = (data) => {
    setComments((prevComments) => [...prevComments, data]);
  }
  
  return (
    <section className='comment-section'>
             {loggedIn ? (
                <div className='all-comments-container'>
                  <CommentForm addNewComment={addNewComment} user={user} />
                  
                  <ul className='comment-list'>
                  {comments.length > 0 ? (
                    comments.map((comment) => ( 
                      <Comment key={comment._id} comment={comment}/>
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