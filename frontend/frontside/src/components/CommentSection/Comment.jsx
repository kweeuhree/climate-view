import React from 'react';
import './CommentSection.css';

const Comment = ({ user, comment, handleEdit, handleDelete }) => {
    // show edit and delete button only if currently logged in user.id equals comment.userId--------------------
    //handle change inside Comment, handle edit inside CommentSection
  return (
    <li>         
          <div className="comment-top">
            <p><span><strong>Posted By:</strong></span> <span>{comment.postedBy}</span></p>
            <p><span><strong>Created At:</strong></span> <span>{new Date(comment.createdAt).toLocaleString()}</span></p>
          </div>

        <div className="comment-bottom">
            <div className="comment-text">
                <p><span><strong>Comment:</strong></span> <span>{comment.body}</span></p>
            </div>

            <div className="button-container">
              {
                 comment.postedBy == user.id ? (
                  <>
                   <button onClick={handleEdit}>Edit</button>     
                   <button onClick={handleDelete}>Delete</button>
                  </>
               ) : (
                null
               )
            }
            </div>
        </div>
         
    </li>
  )
}

export default Comment;