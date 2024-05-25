import React from 'react'

const Comment = ({ comment }) => {
  return (
    <li>         
          <p><span><strong>Posted By:</strong></span> <span>{comment.postedBy}</span></p>
          <p><span><strong>Created At:</strong></span> <span>{new Date(comment.createdAt).toLocaleString()}</span></p>

         <p><span><strong>Comment:</strong></span> <span>{comment.body}</span></p>
    </li>
  )
}

export default Comment;