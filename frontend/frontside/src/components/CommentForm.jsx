import React, { useState } from 'react'

const Comment = ({userId, addNewComment}) => {

  const [comment, setComment] = useState({
    body: '',
    postedBy: null  
  })

  const [formData, setFormData] = useState({
    body: '',
    userId: userId
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch('http://localhost:3000/comments', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

        const data = await response.json();
        console.log(data, 'handle submit inside create form');

        //update to trigger a render
        // setComment({body: formData.body, postedBy: userId});
        addNewComment({body: formData.body, postedBy: userId});
        console.log('comment after setting comments: ', comment.body);
        setFormData({body:''});
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

export default Comment;