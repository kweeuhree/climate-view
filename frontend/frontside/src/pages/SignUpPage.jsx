import React, { useState } from 'react';

const SignUpPage = ({loggedIn}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
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
          const response = await fetch('http://localhost:3000/signup', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
    
            const data = await response.json();
            console.log(data, 'handle submit inside create form');
    
            //update to trigger a render
            setSingupFormData({name:'', email: '', password: ''});
    
        } catch (error) {
            console.log(error, 'errror inside handle submit');
        }
      }

  return (
    <div className='sign-up'>
           <form onSubmit={handleSubmit}>
    
        <input 
          type='text' 
          name="name" 
          onChange={handleChange} 
          value={formData.name}
          /> 
          <input 
             type='text' 
             name="email" 
             onChange={handleChange} 
             value={formData.email}
          />
            <input 
                type='text' 
                name="password" 
                onChange={handleChange} 
                value={formData.password}
            />
            <button type='submit'>Submit</button>
        </form>
  </div>
  )
}

export default SignUpPage;