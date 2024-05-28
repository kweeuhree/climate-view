import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sphere from '../../components/Sphere';
import './LogInStyle.css';


const LogInPage = ({setLoggedIn, loggedIn, setUser}) => {
  const navigate = useNavigate(); //for redirection

  // if login fails this triggers a 'fail to log in' message
  const [loginSuccess, setLoginSuccess] = useState(true); 
  // form data for dynamic updates
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // handle dynamic form updates
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // handle login form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      //try authorizing user with form data
      const response = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // get user object
        const data = await response.json();
        console.log(data, 'handle submit inside LogIn Page');

        // set user object 
        setUser({ id: data.user._id, name: data.user.name, email: data.user.email, createdAt:data.user.createdAt });
        setLoggedIn(true); //set logged in status 
        console.log(loggedIn, 'userId, ', data.user._id);
        setFormData({email: '', password: ''}); //reset form data
        navigate('/profile'); // redirect to profile page
    } catch (error) {
        setLoginSuccess(false); // in case of unsuccessful login trigger 'failed to log in' message
        console.log(error, 'error inside handle submit');
    }
  }

  return (
    <div className='log-in'>
      {/* header and sphere object */}
      <header><h1>welcome !
      <Sphere /></h1></header>

      {/* login form */}
      <form onSubmit={handleSubmit}>
         <input 
             type='email' 
             name="email" 
            //  handle change dynamically 
             onChange={handleChange} 
             placeholder='email'
             value={formData.email}
            />

            <input 
              type='text' 
              name="password" 
               //  handle change dynamically 
              onChange={handleChange} 
              placeholder='password'
              value={formData.password}
            />
            <button type='submit'>Submit</button>
      </form>
      {/* in case of unsuccessful login show 'failed to log in' message */}
      {!loginSuccess && <div className='no-access-message'>Failed to log in</div>}
  </div>
  )
}

export default LogInPage;