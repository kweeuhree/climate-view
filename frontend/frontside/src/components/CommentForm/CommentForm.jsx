import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({user, addNewComment}) => {

  const userId = user.id;

  // form data state for dynamic form change
  const [formData, setFormData] = useState({
    body: '',
    postedBy: userId,
    userName: user.name
  })

  // handle form data change dynamically
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // handle form submit
  const handleSubmit = async (event) => {
    // prevent default form behavior
    event.preventDefault();
    console.log(formData, ' formData inside handleSubmit of commentForm')

    //attempt a post request
    try{
      const response = await fetch('https://climate-view.onrender.com/comments', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
        //get comment object
        const data = await response.json();
        console.log(data, 'handle submit inside commentForm');

        // pass information into parent component
        addNewComment(data.comment);
        //reset form data
        setFormData({body:'', postedBy: userId, userName: user.name});
    } catch (error) {
        console.log(error, 'error inside handle submit');
    }
  }

  return (
    <div className='comment-container'>

      {/* new form submit */}
        <form onSubmit={handleSubmit}>
          <textarea
            type='text'
            name='body'
            //limit number of characters to 100
            maxlength='100'
            // handle change dynamically
            onChange={handleChange}
            value={formData.body}
          />
          <button type='submit'>Submit</button>
        </form>
      
    </div>
  );
}

export default CommentForm;