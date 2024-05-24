import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LogInPage = ({setLoggedIn}) => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
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
      const response = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

        const data = await response.json();
        console.log(data, 'handle submit inside create form');

        //update to trigger a render
        setLoggedIn(true);
        setFormData({email: '', password: ''});
        navigate('/profile');
    } catch (error) {
        console.log(error, 'errror inside handle submit');
    }
  }

  return (
    <div className='log-in'>
      <form onSubmit={handleSubmit}>
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

export default LogInPage;