import React, { useState } from 'react'

const Comment = ({comment, setComment, userId}) => {

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
        setComment((prevComment) => [...prevComment, data]);
        setFormData({body:''});
    } catch (error) {
        console.log(error, 'errror inside handle submit');
    }
  }

  return (
    <div className='comment-container'>

    { comment.body ? 
    (
       <div className="comment">{comment.body}</div>
    ) : ( 
      <form onSubmit={handleSubmit}>
            <textarea 
                type='text' 
                name="body"
                onChange={handleChange} 
                value={formData.body}
            />
            <button type='submit'>Submit</button>
        </form>
    )}

    </div>
  )
}

export default Comment;