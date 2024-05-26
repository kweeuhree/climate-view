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

  const addNewComment = (newComment) => {
    console.log(newComment);
    setComments((prevComments) => [...prevComments, newComment]);
  }

  const handleEdit = async (event) => {
    console.log(event, ', event inside handleEdit of CommentSection');
    try {
      const response = await fetch(`http://localhost:3000/comments/${event._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });

      if(response.ok) {
        const data = await response.json();
        console.log('updated comment inside handleEdit of commentSection: ', data.updatedComment);

        const updatedComment = data.updatedComment;

        setComments((prevComments) => 
          prevComments.map((comment) => 
            comment._id === event._id ? updatedComment : comment
          )
        );
      };

    } catch (error) {
      console.log('error inside handleEdit of commentSection: ', error);
    }
  };

  const handleDelete = async (id) => {

    //remove from database
    const response = await fetch(`http://localhost:3000/comments/${id}`, {
      method: 'DELETE'
    });
    if(response.ok) {
      console.log('response ok');
    } else {
      console.log('inside else block');
    }

    //remove from state
    const updatedComments = comments.filter((item) => item._id !== id);
    setComments(updatedComments);
  };
  
  return (
    <section className='comment-section'>
             {loggedIn ? (
                <div className='all-comments-container'>
                  <CommentForm addNewComment={addNewComment} user={user} />
                </div>
              ) : (
                <div>log in to leave a comment</div>
              )}

              {/* all comments */}
                <ul className='comment-list'>
                    {comments.length > 0 ? (
                      comments.map((comment) => ( 
                        <Comment 
                          key={comment._id} 
                          user={user} 
                          comment={comment} 
                          handleEdit={handleEdit} 
                          handleDelete={handleDelete}
                        />
                      ))
                    ) : (
                      <div>No comments yet</div>
                    )}
                  </ul>
    </section>
  );
};

export default CommentSection;