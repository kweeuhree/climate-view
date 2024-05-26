import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({user, addNewComment}) => {

  const userId = user.id;

  const [formData, setFormData] = useState({
    body: '',
    postedBy: userId,
    userName: user.name
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData, ' formData inside handleSubmit of commentForm')
    try{
      const response = await fetch('http://localhost:3000/comments', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

        const data = await response.json();
        console.log(data, 'handle submit inside commentForm');

        //update to trigger a render
        addNewComment(data.comment);

        setFormData({body:'', postedBy: userId, userName: user.name});
    } catch (error) {
        console.log(error, 'error inside handle submit');
    }
  }

  return (
    <div className='comment-container'>

        <form onSubmit={handleSubmit}>
          <textarea
            type='text'
            name='body'
            onChange={handleChange}
            value={formData.body}
          />
          <button type='submit'>Submit</button>
        </form>
      
    </div>
  );
}

export default CommentForm;