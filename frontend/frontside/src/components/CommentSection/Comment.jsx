import React, { useState } from 'react';
import './CommentSection.css';

const Comment = ({ user, comment, handleEdit, handleDelete }) => {
    //handle change inside Comment, handle edit inside CommentSection
    const [editComment, setEditComment] = useState(null);
    const [formData, setFormData ] = useState({
        body: comment.body,
        postedBy: user.id,
        userName: user.name
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const setEditingMode = (comment) => {
        setEditComment(comment);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedComment = {...comment, body: formData.body};
        console.log(updatedComment, ' updatedComment inside handleEdit of Comment');
        handleEdit(updatedComment);
        setEditComment(null)
    }

  return (
    <li>         
          <div className="comment-top">
            <p><span><strong>Posted By:</strong></span> <span>{comment.userName}</span></p>
            <p><span><strong>Created At:</strong></span> <span>{new Date(comment.createdAt).toLocaleString()}</span></p>
          </div>

        <div className="comment-bottom">
            <div className="comment-text">
               {editComment ? (
                <form onSubmit={handleSubmit}>
                  <textarea
                   type="text" 
                   name='body'
                   onChange={handleChange}
                   defaultValue={comment.body}
                //    value={formData.body}
                  />
                  <button type="submit">Submit</button>
                </form>
               ) : (
                <p><span><strong>Comment:</strong></span> <span>{comment.body}</span></p>
               )}
            </div>

            <div className="button-container">
              {
                 comment.postedBy == user.id ? (
                  <>
                   <button onClick={() => setEditingMode(comment)}>Edit</button>     
                   <button onClick={()=> handleDelete(comment._id)}>Delete</button>
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