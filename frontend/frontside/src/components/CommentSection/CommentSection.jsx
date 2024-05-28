import React, { useState, useEffect } from 'react';
import { getComments } from '../../utils/getComments';
import Comment from './Comment';
import CommentForm from '../CommentForm/CommentForm';
import './CommentSection.css';

const CommentSection = ({loggedIn, user}) => {

  // set all comments state as empty array 
  const [comments, setComments] = useState([]);

  // fetch comments on render
  useEffect(() => {
    const fetchComments = async () => {
      // try fetching
      try {
        const fetchedComments = await getComments();
        // console.log('fetched comments inside try block ', fetchedComments);
        setComments(fetchedComments.comments); //set comments
        // console.log('fetchedComments.comments on the front after fetching ', fetchedComments.comments);
      } catch (error) {
        //catch errors
        console.log('error inside fetchComments ', error);
      }
    }

    //call the function
    fetchComments();
  
  }, []); //fetch once


  //pass new comment to a parent function
  const addNewComment = (newComment) => {
    console.log(newComment);
      // save new comment to state
    setComments((prevComments) => [...prevComments, newComment]);
  }


  // handle edit inside parent component
  const handleEdit = async (event) => {
    console.log(event, ', event inside handleEdit of CommentSection');

    // try requesting the update
    try {
      const response = await fetch(`http://localhost:3000/comments/${event._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });

      if(response.ok) {
        // get comment object
        const data = await response.json();
        console.log('updated comment inside handleEdit of commentSection: ', data.updatedComment);
        //extract new comment
        const updatedComment = data.updatedComment;
        //set state, replace old comment, match by id 
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

  // handle delete of comment
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

              {/* all comments */}
                <ul className='comment-list'>
                  {/* display comments if they exist */}
                    {comments.length > 0 ? (
                      comments.map((comment) => ( 
                        <Comment 
                          key={comment._id} 
                          user={user} 
                          comment={comment} 
                          // pass handler functions
                          handleEdit={handleEdit} 
                          handleDelete={handleDelete}
                        />
                      ))
                    ) : (
                      // display a message if there are no comments yet
                      <div className='no-access-message'>No comments yet</div>
                    )}
                  </ul>

            {/* if user is logged in show comment input box */}
                  {loggedIn ? (
                <div className='all-comments-container'>
                  <CommentForm addNewComment={addNewComment} user={user} />
                </div>
              ) : (
                <div className='no-access-message'>log in to leave a comment</div>
              )}

    </section>
  );
};

export default CommentSection;