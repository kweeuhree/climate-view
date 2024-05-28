import React, { useState } from 'react';
import './CommentSection.css';

const Comment = ({ user, comment, handleEdit, handleDelete }) => {
    //handle change inside Comment, handle edit inside CommentSection

    // set editing mode
    const [editComment, setEditComment] = useState(null);
    
    //handle form data state dynamically
    const [formData, setFormData ] = useState({
        body: comment.body,
        postedBy: user?.id,
        userName: user?.name
    })

    //handle form data change dynamically
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    // set editing mode onclick
    const setEditingMode = (comment) => {
        setEditComment(comment);
    }

    // handle edited comment form submit
    const handleSubmit = (event) => {
      // prevent default form behavior
        event.preventDefault();
        // update comment body
        const updatedComment = {...comment, body: formData.body};
        console.log(updatedComment, ' updatedComment inside handleEdit of Comment');
        //pass new information into parent component
        handleEdit(updatedComment);
        setEditComment(null) //reset state, remove input box
    }

  return (
    <li>         
          <div className="comment-top">
            <p><span><strong>Posted By:</strong></span> <span>{comment.userName}</span></p>
            <p><span><strong>Created At:</strong></span> <span>{new Date(comment.createdAt).toLocaleString()}</span></p>
          </div>

        <div className="comment-bottom">
            <div className="comment-text">
              {/* if editing mode is set show input box */}
               {editComment ? (
                <form className="update-comment-form" onSubmit={handleSubmit}>
                  <textarea
                  className='update-comment-textarea'
                   type="text" 
                   name='body'
                   rows="3"
                   cols="50"
                   onChange={handleChange}
                   defaultValue={comment.body}
                  />
                  <button type="submit">Submit</button>
                </form>
                
               ) : (// else show comment body
                <p><span><strong></strong></span> <span>{comment.body}</span></p>
               )}
            </div>

            <div className="button-container">
              {
                // if user id matches comment id show edit and delete buttons
                 comment.postedBy === user?.id ? (
                  <>
                   <button onClick={() => setEditingMode(comment)}>Edit</button>     
                   <button onClick={()=> handleDelete(comment._id)}>Delete</button>
                  </>
               ) : (
                // might have a filler picture ------------------------
                null
               )
            }
            </div>
        </div>
         
    </li>
  )
}

export default Comment;